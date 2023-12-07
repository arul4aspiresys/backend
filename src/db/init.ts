require('dotenv').config()

import { Customer, Order, OrderDetail, Product } from './models'

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => Promise.all([
    Customer.sync({ alter: isDev || isTest }),
    Order.sync({ alter: isDev || isTest }),
    OrderDetail.sync({ alter: isDev || isTest }),
    Product.sync({ alter: isDev || isTest }),    
]);

export default dbInit 