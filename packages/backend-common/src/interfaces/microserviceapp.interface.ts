// import {ResourceWithOptions} from "adminjs/src/adminjs-options.interface";

export interface IExpressApp {
    getSyncProcess(): any[];

    setRoutes(app: Object): void;

    getAdminBroResources(): Array<any>;
}
