import { OrderInput, OrderOutput } from "../models/Order";
import { Order } from '../models';

export const create = async (payload: OrderInput): Promise<OrderOutput> => {
    return await Order.create(payload);
}

export const getById = async(id: number): Promise<OrderOutput> => {
    const order = await Order.findByPk(id);
    if(!order) {
        throw new Error('Order not found');        
    }
    return order;
}

/* export const getByCustomerID = async(custID: number): Promise<OrderOutput | null> => {
    const order = await Order.findOne({
        where: {
            customerID: custID
        }
    });
    if(!order) {
        throw new Error('Order not found');
    }
    return order;
} */