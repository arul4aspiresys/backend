import { OrderDetail } from "../../interfaces";
import { OrderDetailOutput } from "../../../db/models/OrderDetail";


export const toOrderDetail = (input: OrderDetailOutput): OrderDetail => {
    return {
        id: input.id,
        orderID: input.orderID,
        productID: input.productID,
        quantity: input.quantity,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt,
    }
}