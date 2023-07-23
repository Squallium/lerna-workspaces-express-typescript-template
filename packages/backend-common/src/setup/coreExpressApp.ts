import express from 'express';
import * as core from "express-serve-static-core";

import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
// import * as AdminJSMongoose from '@adminjs/mongoose'

import {IExpressApp} from "../interfaces";
import {HealthcheckRoutes} from "../routes";
import {errorMiddleware, responseMiddleware} from "../middlewares";

// Lazy Begin Imports
import {CoreConn} from "../connections";
// Lazy End Imports

// library references
// const createError = require('http-errors');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const cors = require('cors');

import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import url from "url";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export class CoreExpressApp {

    app: core.Express;
    expressApp: IExpressApp;

    constructor(expressApp: IExpressApp) {
        this.app = express();
        this.expressApp = expressApp;
    }

    setupApp(): void {

        // AdminJS (former admin bro)
        // const AdminJS = require('adminjs')
        // const AdminJSExpress = require('@adminjs/express')
        // const AdminJSMongoose = require('@adminjs/mongoose')

        // We have to tell AdminJS that we will manage mongoose resources with it
        // AdminJS.registerAdapter({
        //     Resource: AdminJSMongoose.Resource,
        //     Database: AdminJSMongoose.Database,
        // });

        // synchronous process
        Promise.all([
            // Lazy Begin Promises
            // CoreConn,
            Promise.resolve(),
            // Lazy End Promises
        ].concat(this.expressApp.getSyncProcess())).then(results => {
            console.log("Sync process finished");

            // view engine setup
            // this.app.set('views', path.join(__dirname, 'views'));
            // this.app.set('view engine', 'pug');

            // express initialization
            this.app.use(logger('dev'));
            this.app.use(express.json());
            this.app.use(express.urlencoded({extended: false}));
            this.app.use(cookieParser());
            this.app.use(cors());
            this.app.use(express.static(path.join(__dirname, 'public')));

            // core routes definition
            this.app.use('/healthcheck', HealthcheckRoutes);

            // hook for setting routes from the main backend express app
            this.expressApp.setRoutes(this.app)

            // Pass all configuration settings to AdminBro
            const adminJs = new AdminJS({
            //     resources: [
            //         // Lazy Begin Bro
            //         CoreConn.model('Report'),
            //         // Lazy End Bro
            //     ].concat(this.expressApp.getAdminBroResources()),
                rootPath: '/admin',
            });

            // Build and use a router which will handle all AdminBro routes
            const router = AdminJSExpress.buildRouter(adminJs);
            this.app.use(adminJs.options.rootPath, router);

            // catch 404 and forward to error handler
            this.app.use(function (req, res, next) {
                next(createError(404));
            });

            // main response handler
            this.app.use(responseMiddleware);

            // main error handler
            this.app.use(errorMiddleware);

            // error handler
            this.app.use(function (err: any, req: any, res: any, next: any) {
                // set locals, only providing error in development
                res.locals.message = err.message;
                res.locals.error = req.app.get('env') === 'development' ? err : {};

                // show error message in console
                console.error(err.message);

                // render the error page
                res.status(err.status || 500);
                res.render('error');
            });

            // app initialized
            this.app.emit('appStarted');
        });
    }
}
