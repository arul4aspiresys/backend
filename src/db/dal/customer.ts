import { CustomerInput, CustomerOutput } from '../models/Customer';
import { Customer } from "../models";

export const create = async (payload: CustomerInput): Promise<CustomerOutput> => {
    return await Customer.create(payload);    
}

export const getAll = async (): Promise<CustomerOutput[]> => {
    return await Customer.findAll({})
}

export const getById = async (id: number): Promise<CustomerOutput> => {
    const customer = await Customer.findByPk(id);
    if(!customer) {
        throw new Error('Customer not found');
    }
    return customer;
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedCustomerCount = await Customer.destroy({
        where: {id}
    });
    return !!deletedCustomerCount;
}



