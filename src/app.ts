import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import webRoutes from './routes/web';
import apiRoutes from './routes/api';

class App {

    public app: express.Application;
    public mongoUrl: string = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;  

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
    }
    
    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use('/', webRoutes);
        this.app.use('/api', apiRoutes);

        dotenv.config();
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }    
}

export default new App().app;
