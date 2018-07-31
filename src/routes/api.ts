import { Router } from 'express';
import ApiController from '../controllers/api.controller';
import PostsController from '../controllers/posts.controller';

const router: Router = Router();

router.get('/', ApiController.index);
router.get('/posts', PostsController.index);
router.post('/posts/create', PostsController.create);
router.get('/posts/:postId', PostsController.show);
router.put('/posts/:postId', PostsController.update);
router.delete('/posts/:postId', PostsController.delete);

export default router;