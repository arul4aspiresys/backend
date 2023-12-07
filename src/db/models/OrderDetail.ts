import { Model, DataTypes, Optional } from "sequelize";
import dbConnection from "../config";
import { Order } from ".";

interface OrderDetailAttributes {
    orderID: number;
    productID: number;
    quantity: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface OrderDetailInput extends Optional<OrderDetailAttributes, 'createdAt' | 'deletedAt' | 'updatedAt'> {}
export interface OrderDetailOutput extends Required<OrderDetailAttributes> {}

class OrderDetail extends Model<OrderDetailAttributes, OrderDetailInput> implements OrderDetailAttributes {
    declare orderID: number;
    declare productID: number;
    declare quantity: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

OrderDetail.init({
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
OrderDetail.belongsTo(Order);
export default OrderDetail;