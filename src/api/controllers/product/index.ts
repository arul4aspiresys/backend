import * as ProductDAL from '../../../db/dal/product';
import { CreateProductDTO } from '../../dto/product.dto';
import { Product } from '../../interfaces';
import * as mapper from './mapper';

export const create = async (payload: CreateProductDTO): Promise<Product> => {
    return mapper.toProduct(await ProductDAL.create(payload));
}

export const getAll = async (): Promise<Product[]> => {
    return ((await ProductDAL.getAll()).map(mapper.toProduct));
}

export const getByIs = async (id: number): Promise<Product> => {
    return mapper.toProduct(await ProductDAL.getById(id));
}

export const deleteById =async (id: number): Promise<boolean> => {
    return await ProductDAL.deleteById(id);
}