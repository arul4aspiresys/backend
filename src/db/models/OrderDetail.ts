import { Model, DataTypes, Optional } from "sequelize";
import dbConnection from "../config";

interface OrderDetailAttributes {
    id: number;
    orderID: number;
    productID: number;
    quantity: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface OrderDetailInput extends Optional<OrderDetailAttributes, 'id'> {}
export interface OrderDetailOutput extends Required<OrderDetailAttributes> {}

class OrderDetail extends Model<OrderDetailAttributes, OrderDetailInput> implements OrderDetailAttributes {
    declare id: number;
    declare orderID: number;
    declare productID: number;
    declare quantity: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

OrderDetail.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    orderID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    productID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
}, {
    sequelize: dbConnection,
    paranoid: true
});

export default OrderDetail;