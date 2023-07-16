import * as express from "express";
import {BaseResponse, BaseError} from "@squallium-template/backend-common/src";
import {ItemController} from "../controllers";

export const ItemRoutes = express.Router();

ItemRoutes.post('/', function (req, res, next) {
    const itemController: ItemController = new ItemController();

    itemController.create(req.body, (err: BaseError | undefined, response: BaseResponse) => {
        if (err) {
            next(err);
        } else {
            next(response);
        }
    });
});