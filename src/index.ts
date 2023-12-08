/**
 *  External Modules - 3rd party
 */ 
import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import routes from './api/routes';
import dbInit from './db/init';

dotenv.config();

const port: number = parseInt(process.env.PORT as string, 10) || 3000;

export const get = () => {
    const app: Application = express();
    /**
     * Middlewares
     */
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    dbInit().then(() => {
        console.log('DB sync completed');
        app.use('/api/v1', routes);            
    });
    return app;
};

export const start = () => {
    const app = get();

    try {        
        app.listen(port, () => {
            console.log(`Server is listening on http://localhost:${port}`);
        });

    } catch (error: any) {
        console.log(`Error occured: ${error.message}`);
    }
};

start();

