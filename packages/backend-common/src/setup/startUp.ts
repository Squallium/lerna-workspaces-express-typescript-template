import {CoreExpressApp} from "./coreExpressApp";
import {IExpressApp} from "../interfaces";
import {config} from "@app-config/main";

/**
 * Module dependencies.
 */
const debug = require('debug')('base-microservice:server');
const http = require('http');

export class StartUp {

    coreApp: CoreExpressApp;

    constructor(microServiceApp: IExpressApp) {
        this.coreApp = new CoreExpressApp(microServiceApp);
    }

    startUpSequence(): void {
        /**
         * Run the app
         */
        this.coreApp.setupApp();

        /**
         * Wait until the app is full started
         */
        this.coreApp.app.on('appStarted', () => {

            /**
             * Get port from app config and store in Express.
             */
            var port = normalizePort(config.server.port.toString() || '3000');
            this.coreApp.app.set('port', port);

            /**
             * Create HTTP server.
             */
            var server = http.createServer(this.coreApp.app);

            /**
             * Listen on provided port, on all network interfaces.
             */
            server.listen(port);
            server.on('error', onError);
            server.on('listening', onListening);

            /**
             * Normalize a port into a number, string, or false.
             */
            function normalizePort(val: string) {
                var port = parseInt(val, 10);

                if (isNaN(port)) {
                    // named pipe
                    return val;
                }

                if (port >= 0) {
                    // port number
                    return port;
                }

                return false;
            }

            /**
             * Event listener for HTTP server "error" event.
             */
            function onError(error: { syscall: string; code: any; }) {
                if (error.syscall !== 'listen') {
                    throw error;
                }

                var bind = typeof port === 'string'
                    ? 'Pipe ' + port
                    : 'Port ' + port;

                // handle specific listen errors with friendly messages
                switch (error.code) {
                    case 'EACCES':
                        console.error(bind + ' requires elevated privileges');
                        process.exit(1);
                        break;
                    case 'EADDRINUSE':
                        console.error(bind + ' is already in use');
                        process.exit(1);
                        break;
                    default:
                        throw error;
                }
            }

            /**
             * Event listener for HTTP server "listening" event.
             */
            function onListening() {
                var addr = server.address();
                var bind = typeof addr === 'string'
                    ? 'pipe ' + addr
                    : 'port ' + addr.port;
                debug('Listening on ' + bind);
            }
        });
    }

}
