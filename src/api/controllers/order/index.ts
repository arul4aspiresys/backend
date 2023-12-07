import * as OrderDAL from '../../../db/dal/order';
import { CreateOrderDTO } from '../../dto/order.dto';
import { Order } from '../../interfaces';
import * as mapper from './mapper';

export const create = async (payload: CreateOrderDTO): Promise<Order> => {
    return mapper.toOrder(await OrderDAL.create(payload));
}

export const getById = async (id: number): Promise<Order> => {
    return mapper.toOrder(await OrderDAL.getById(id));
}