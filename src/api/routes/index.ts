import { Router } from 'express';
import customersRouter, {} from './customers.route';
import ordersRouter, {} from './orders.route';
import productsRouter, {} from './products.route';

const router = Router();

router.use('/customers', customersRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);

export default router;
