import { Request, Response } from 'express';

class HelloController 
{
    public index(req: Request, res: Response) {
        res.render('index', { message: 'Hello World!' });
    }
}

export default new HelloController;
