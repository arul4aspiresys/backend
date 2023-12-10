import { Router, Request, Response } from 'express';
import * as OrderController from '../controllers/order';
import * as OrderDetailController from '../controllers/orderDetail';
import { CreateOrderDTO } from '../dto/order.dto';
import { CreateOrderDetailDTO } from '../dto/orderDetail.dto';

const ordersRouter = Router();

ordersRouter.get('/:id', async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const result = await OrderController.getById(id);
    return res.status(200).send(result);
});

ordersRouter.post('/', async (req: Request, res: Response) => {
    const orderPayload: CreateOrderDTO = req.body.order;
    const orderDetailsPayload: CreateOrderDetailDTO[] = req.body.orderDetails;

    const orderResult = await OrderController.create(orderPayload);

    let orderDetailResult;
    orderDetailsPayload.map(el => {
        el.orderID = orderResult.id
    });
    if(orderDetailsPayload.length > 1) {    
        orderDetailResult = await OrderDetailController.bulkCreate(orderDetailsPayload);
    } else {
        orderDetailResult = await OrderDetailController.create(orderDetailsPayload[0]);
    }

    return res.status(201).send({message: "Order created successfully!"});
});

export default ordersRouter;