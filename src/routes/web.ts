import { Router } from 'express';
import HelloController from '../controllers/hello.controller';

const router: Router = Router();

router.get('/', HelloController.index);

export default router;