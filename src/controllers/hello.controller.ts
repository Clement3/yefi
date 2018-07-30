import { Request, Response } from 'express';

class HelloController {
    index(req: Request, res: Response) {
        res.send('Hello, World!');
    }
}

export default new HelloController;
