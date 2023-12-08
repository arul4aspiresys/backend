import { Order } from "../../interfaces";
import { OrderOutput } from "../../../db/models/Order";

export const toOrder = (input: OrderOutput): Order => {
    return {
        id: input.id,
        customerID: input.customerID,
        totalAmount: input.totalAmount,
        paymentMethod: input.paymentMethod,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt,
    }
}