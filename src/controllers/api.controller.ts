import { Request, Response } from 'express';

class ApiController 
{
    public index(req: Request, res: Response) {
        res.json({'content':'Hello World!'});
    }
}

export default new ApiController;
