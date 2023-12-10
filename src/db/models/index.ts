import Customer from "./Customer";
import Product from "./Product";
import Order from "./Order";
import OrderDetail from "./OrderDetail";

Customer.hasMany(Order, { foreignKey: 'customerID', as: 'orders' });
Order.belongsTo(Customer, { foreignKey: 'customerID', targetKey: 'id' });
Order.hasMany(OrderDetail, { foreignKey: 'orderID', as: 'orderDetails' });
OrderDetail.belongsTo(Order, { foreignKey: 'orderID', targetKey: 'id' });

export {
    Customer,
    Product,
    Order,
    OrderDetail
}