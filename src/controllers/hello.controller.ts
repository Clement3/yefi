import { Request, Response } from 'express';

class HelloController 
{
    public index(req: Request, res: Response) {
        res.send('Hello, World!');
    }
}

export default new HelloController;
