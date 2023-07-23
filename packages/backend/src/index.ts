import {Express} from "express";
import {IExpressApp} from "@squallium-template/backend-common/src/interfaces";
import {StartUp} from "@squallium-template/backend-common/src";
import { config, loadConfig } from '@app-config/main';
import { dirname, resolve as resolvePath } from 'path';
import { ItemRoutes } from "@squallium-template/plugin-todo-backend/src"

// import routes
// import services
// Lazy Begin Imports
// Lazy End Imports

export class CoreTestMicroServiceApp implements IExpressApp {

    getSyncProcess(): any[] {

        // register connections of the microservice
        // new MigrationService().registerConnection('placeholder', placeholderConn);

        // array of promises to be completed before run the application
        return [
            // loading app-config synchronously
            loadConfig({
                directory: dirname(resolvePath(__dirname, '../../')),
            })
            // Lazy Begin Promises
            // Lazy End Promises
        ]
    }

    setRoutes(app: Express): void {
        // app.use('/<placeholder>', PlaceholderRoutes);
        app.use('/items', ItemRoutes);
    }

    getAdminBroResources(): any[] {
        return [
            // Lazy Begin Bro
            // Lazy End Bro
        ]
    }
}

/**
 * Initialize backend sequence
 */

const startUp: StartUp = new StartUp(new CoreTestMicroServiceApp());
startUp.startUpSequence();