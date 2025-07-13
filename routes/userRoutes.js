import express from 'express';
import { userController } from '../controllers/userController.js';



const userRouter = express.Router();

userRouter.get('/bookings',userController.getUserBookings);
userRouter.post('/update-favorites', userController.updateFavorite);
userRouter.get('/favorites', userController.getFavorites);

export default userRouter;