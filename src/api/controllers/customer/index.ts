import * as CustomerDAL from '../../../db/dal/customer';
import { CreateCustomerDTO } from '../../dto/customer.dto';
import { Customer } from '../../interfaces';
import * as mapper from './mapper';

export const create = async (payload: CreateCustomerDTO): Promise<Customer> => {
    return mapper.toCustomer(await CustomerDAL.create(payload));
}

export const getById = async (id: number): Promise<Customer> => {
    return mapper.toCustomer(await CustomerDAL.getById(id));
}

export const getAll = async (): Promise<Customer[]> => {
    return ((await CustomerDAL.getAll()).map(mapper.toCustomer));
}

export const deleteById = async (id: number): Promise<boolean> => {
    return await CustomerDAL.deleteById(id);
}