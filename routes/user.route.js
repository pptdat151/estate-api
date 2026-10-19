import routes from 'express';
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  savePost,
  profilePosts,
  getNotificationNumber,
} from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = routes.Router();

router.get('/', getUsers);
router.get('/profilePosts', verifyToken, profilePosts);
router.get('/notification', verifyToken, getNotificationNumber);
router.post('/save', verifyToken, savePost);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);
router.get('/:id', verifyToken, getUser);


export default router;
