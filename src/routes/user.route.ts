import { Router } from 'express';
import { createUser, getGreetings, getUser } from '../controllers/user.controller';
import { isAuthenticated } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', getGreetings);
router.get('/api/users', getUser);
router.post('/api/users', isAuthenticated, createUser);

export default router;
