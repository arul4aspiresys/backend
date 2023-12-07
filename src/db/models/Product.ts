import { DataTypes, Model, Optional } from 'sequelize';
import dbConnection from '../config';

interface ProductAttributes {
    id: number;
    name: string;
    price: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface ProductInput extends Optional<ProductAttributes, 'id'> {};
export interface ProductOutput extends Required<ProductAttributes> {};

class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
    declare id: number;
    declare name: string;
    declare price: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Product.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(7,2).UNSIGNED,
        allowNull: false
    }
},{
    sequelize: dbConnection,
    paranoid: true
});

export default Product;