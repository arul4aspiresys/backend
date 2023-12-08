import { Model, Optional, DataTypes } from "sequelize";
import dbConnection from "../config";

interface OrderAttributes {
    id: number;    
    customerID: number;
    totalAmount: number;
    paymentMethod: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface OrderInput extends Optional<OrderAttributes, 'id'> {}
export interface OrderOutput extends Required<OrderAttributes> {}

class Order extends Model<OrderAttributes, OrderInput> implements OrderAttributes {
    declare id: number;    
    declare customerID: number;
    declare totalAmount: number;
    declare paymentMethod: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Order.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    }, 
    customerID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    totalAmount: {
        type: DataTypes.DECIMAL(11,2).UNSIGNED,
        allowNull: false
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: dbConnection,
    paranoid: true
});
// Order.belongsTo( Customer);
// Order.hasMany(OrderDetail);
export default Order;