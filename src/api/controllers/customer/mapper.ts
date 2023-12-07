import { Customer } from "../../interfaces";
import { CustomerOutput } from "../../../db/models/Customer";

export const toCustomer = (input: CustomerOutput): Customer => {
    return {
        id: input.id,
        name: input.name,
        mobile: input.mobile,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt,
    }
}