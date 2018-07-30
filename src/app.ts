import express from 'express';
import bodyParser from 'body-parser';
import webRoutes from './routes/web';
import apiRoutes from './routes/api';

class App {

    public app: express.Application;
    
    constructor() {
        this.app = express();
        this.config();
    }
    
    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use('/', webRoutes);
        this.app.use('/api', apiRoutes);
    }
}

export default new App().app;
