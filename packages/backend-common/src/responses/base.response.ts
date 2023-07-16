export class BaseResponse {
    status: number;
    type: string;
    message: string | undefined;
    code: number;
    data: any;
    verbose: boolean;

    constructor(status: number, type: string, message: string | undefined, code: number, verbose = false) {
        this.status = status;
        this.type = type;
        this.message = message;
        this.code = code;
        this.verbose = verbose;
    }

    static defaultResponse(): BaseResponse {
        return new BaseResponse(0, '', undefined, 0)
    }

    public buildData(): object {
        return this.data;
    }

}
