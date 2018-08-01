import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mustache from 'mustache';
import fs from 'fs';
import webRoutes from './routes/web';
import apiRoutes from './routes/api';

// Load .env file
dotenv.config();

class App {

    public app: express.Application;
    public mongoUrl: string = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;  

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

        this.app.engine('mustache', (filePath: string, options: any, callback: Function) => { 
            fs.readFile(filePath, (err, content) => {
                if (err) {
                    return callback;
                }       
                const rendered = mustache.to_html(content.toString(), options);
                return callback(null, rendered);
            });
        });
        this.app.set('view engine', 'mustache');
        this.app.set('views', __dirname + '/views');
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}

export default new App().app;
