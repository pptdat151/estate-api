import routes from 'express';
import { login, register, logout} from '../controllers/auth.controller.js';

const router = routes.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);

export default router;