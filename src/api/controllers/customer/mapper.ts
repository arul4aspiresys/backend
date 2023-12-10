import { Customer } from "../../interfaces";
import { CustomerOutput } from "../../../db/models/Customer";
import { Order } from "../../interfaces/order.interface";

interface CustomerInstance extends CustomerOutput {
    orders: Order[];
}

export const toCustomer = (input: CustomerInstance): Customer => {
    return {
        id: input.id,
        name: input.name,
        mobile: input.mobile,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt,
        orders: input.orders?.map(order => {
            return {
                id: order.id,
                totalAmount: order.totalAmount,
                paymentMethod: order.paymentMethod,
                customerID: order.customerID,                
            }
        })
    }
}