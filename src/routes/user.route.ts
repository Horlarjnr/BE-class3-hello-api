import { Router } from 'express';
import { createUser, getGreetings, getUser } from '../controllers/user.controller';

const router = Router();

router.get('/', getGreetings);
router.post('/api/users', createUser);
router.get('/api/users', getUser);

export default router;
