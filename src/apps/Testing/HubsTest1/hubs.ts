import App from "./App.vue";
import HubsAppProto from "../../HubsApp";
import {data as SharedData, Store} from "./shared"

class HubsApp extends HubsAppProto {
    shared: Store
    
    constructor (params: any = {}) {
        super(App, 400, 475, params)

        // create our shared data object that will
        // share data between vue and hubs
        this.shared = new Store(this)
        this.vueApp.provide('shared', this.shared)

        this.isInteractive = true;
        this.isNetworked = true;
        this.isStatic = false;
    }
    
    updateSharedData(dataObject: SharedData) {
        super.updateSharedData(dataObject)
        this.shared.updateSharedData(dataObject)
    }

    getSharedData() {
        return this.shared.state;
    }
}

var init = function(params: any = {}) {
    let app = new HubsApp(params)
    app.mount()
    return app
}

export default init
