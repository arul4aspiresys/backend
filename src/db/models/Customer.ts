import { DataTypes, Model, Optional } from 'sequelize';
import dbConnection from '../config';
import { Order } from '.';

interface CustomerAttributes {
    id: number;
    name: string;
    mobile: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface CustomerInput extends Optional<CustomerAttributes, 'id'> {};
export interface CustomerOutput extends Required<CustomerAttributes> {};

class Customer extends Model<CustomerAttributes, CustomerInput> implements CustomerAttributes {
    declare id: number;
    declare name: string;
    declare mobile: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Customer.init({
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
    mobile: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
}, {
    sequelize: dbConnection,
    paranoid: true
});

export default Customer;