import * as OrderDetailDTO from '../../../db/dal/orderDetails';
import { CreateOrderDetailDTO } from '../../dto/orderDetail.dto';
import { OrderDetail } from '../../interfaces';
import * as mapper from './mapper';

export const create = async (payload: CreateOrderDetailDTO): Promise<OrderDetail> => {
    return mapper.toOrderDetail(await OrderDetailDTO.create(payload));
}

export const getByOrderID = async (id: number): Promise<OrderDetail> => {
    return mapper.toOrderDetail(await OrderDetailDTO.getByOrderID(id));
}