import { ContextRunner, body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { ReqValidationError } from "../errors/request-validation-errors";

export const validate = (validations: ContextRunner[]) => {
    return async(req: Request, res: Response, next: NextFunction) => {
        for(let validation of validations) {
            const result = await validation.run(req);
            if(result.context.errors.length) break;
        }

        const errors = validationResult(req);
        if(errors.isEmpty()) {
            return next();
        }
        next(new ReqValidationError(errors.array()));
    }
}