import { Router, Request, Response } from 'express';
import * as customerController from '../controllers/customer';
import { CreateCustomerDTO } from '../dto/customer.dto';

const customersRouter = Router();

customersRouter.get('/', async (req: Request, res: Response) => {
    const results = await customerController.getAll();
    return res.status(200).send(results);
});

customersRouter.get('/:id', async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const record = await customerController.getById(id);
    return res.status(200).send(record);
});

customersRouter.post('/', async (req: Request, res: Response) => {
    const payload: CreateCustomerDTO = req.body;
    const result = await customerController.create(payload);
    return res.status(201).send(result);
});

customersRouter.delete('/:id', async (req: Request, res: Response) => {
    const id:number = Number(req.params.id);
    const result = await customerController.deleteById(id);
    return res.status(204).send(result);
})

export default customersRouter;