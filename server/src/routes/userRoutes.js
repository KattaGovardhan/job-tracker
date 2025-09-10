import express from 'express';
import userAuth from '../middleware/userAuth.js';
import { StatsCount, getUserProfile, updateUserProfile, updateUserAvatar, updateUserCoverImage, deleteUserProfile, getMe } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/stats-count', userAuth, StatsCount);
userRouter.get('/profile/:id', userAuth, getUserProfile);
userRouter.put('/profile/:id', userAuth, updateUserProfile);
userRouter.put('/avatar/:id', userAuth, updateUserAvatar);
userRouter.put('/cover-image/:id', userAuth, updateUserCoverImage);
userRouter.delete('/profile', userAuth, deleteUserProfile);
userRouter.get('/profile/me', userAuth, getMe);

export default userRouter;