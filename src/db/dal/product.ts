import { ProductInput, ProductOutput } from "../models/Product";
import { Product } from '../models';

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
    return await Product.create(payload);
}

export const getById = async (id: number): Promise<ProductOutput> => {
    const product = await Product.findByPk(id);
    if(!product) {
        throw new Error('Product not found');
    }
    return product;
}

export const getAll = async (): Promise<ProductOutput[]> => {
    return await Product.findAll();
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedProductCount = await Product.destroy({
        where: {id}
    });
    return !!deletedProductCount;
}