import { OrderDetailInput, OrderDetailOutput } from "../models/OrderDetail";
import { OrderDetail } from '../models';

export const create = async (payload: OrderDetailInput): Promise<OrderDetailOutput> => {
    return await OrderDetail.create(payload);
}

export const getByOrderID = async (orderID: number): Promise<OrderDetailOutput> => {
    const orderDetail = await OrderDetail.findOne({
        where: {
            orderID: orderID
        }
    });
    if(!orderDetail) {
        throw new Error('Order detail not found');
    }
    return orderDetail;
}