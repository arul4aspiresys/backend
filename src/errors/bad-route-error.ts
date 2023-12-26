import { CustomError } from "./custom-error";

export class BadRouteError extends CustomError {
    statusCode = 404;
    constructor(){
        super();
        Object.setPrototypeOf(this, BadRouteError.prototype);
    }
    formatErrors() {
        return [{
            message: "Route does not exists!"
        }];
    }
}