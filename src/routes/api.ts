import { Router } from 'express';
import ApiController from '../controllers/api.controller';

const router: Router = Router();

router.get('/', ApiController.index);

export default router;