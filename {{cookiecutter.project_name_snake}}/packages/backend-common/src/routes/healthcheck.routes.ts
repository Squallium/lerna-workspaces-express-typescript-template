import * as express from 'express';

export const HealthcheckRoutes = express.Router();

HealthcheckRoutes.get('/', function (req, res, next) {
    res.status(200).json({status: 'ok'});
});

