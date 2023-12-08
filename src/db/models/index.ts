import Customer from "./Customer";
import Product from "./Product";
import Order from "./Order";
import OrderDetail from "./OrderDetail";

Customer.hasMany(Order, { foreignKey: 'customerID' });
Order.belongsTo(Customer, { foreignKey: 'customerID' });
Order.hasMany(OrderDetail, { foreignKey: 'orderID' });
OrderDetail.belongsTo(Order, { foreignKey: 'orderID' });

export {
    Customer,
    Product,
    Order,
    OrderDetail
}