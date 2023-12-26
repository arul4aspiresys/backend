import { Router, Request, Response } from 'express';
import { CreateProductDTO } from '../dto/product.dto';
import * as ProductController from '../controllers/product';
import { body } from 'express-validator';
import { validate } from '../../validators/validator-runner';

const productsRouter = Router();

productsRouter.get('/', async (req: Request, res: Response) => {
    const result = await ProductController.getAll();
    return res.status(200).send(result);
});

productsRouter.get('/:id', async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const result = await ProductController.getByIs(id);
    return res.status(200).send(result);
});

productsRouter.post(
    '/', 
    validate([
        body('name').trim().notEmpty().withMessage('Name of the product is required'),
        body('price').trim().notEmpty().withMessage('Price of the product is required')
    ]),
    async (req: Request, res: Response) => {
        const payload: CreateProductDTO = req.body;
        const result = await ProductController.create(payload);
        return res.status(201).send(result);
    }
);

productsRouter.delete('/:id', async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const result = await ProductController.deleteById(id);
    return res.status(204).send(result);
})

export default productsRouter;