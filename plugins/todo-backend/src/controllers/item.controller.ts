import {BaseError, BaseResponse} from "@squallium-template/backend-common/src";


export class ItemController {

    constructor() {

    }

    public create(body: any, callback: (err: BaseError | undefined, response: BaseResponse) => void): void {
        const itemResponse: BaseResponse = BaseResponse.defaultResponse();
        itemResponse.data = {
            item: "created",
        }
        callback(undefined, itemResponse);
    }
}