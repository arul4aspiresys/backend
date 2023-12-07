import { Product } from "../../interfaces";
import { ProductOutput } from "../../../db/models/Product";

export const toProduct = (input: ProductOutput): Product => {
    return {
        id: input.id,
        name: input.name,
        price: input.price,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt,
    }
}