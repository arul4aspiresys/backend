import { Order } from "../../interfaces";
import { OrderOutput } from "../../../db/models/Order";
import { OrderDetail} from "../../interfaces/orderDetail.interface";

interface OrderInstance extends OrderOutput {
    orderDetails: OrderDetail[];
}

export const toOrder = (input: OrderInstance): Order => {    
    return {
        id: input.id,
        customerID: input.customerID,
        totalAmount: input.totalAmount,
        paymentMethod: input.paymentMethod,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt,
        orderDetails: input.orderDetails?.map(detail => {
            return {
                id: detail.id,
                orderID: detail.orderID,
                productID: detail.productID,
                quantity: detail.quantity,
            }
        }),
    }
}