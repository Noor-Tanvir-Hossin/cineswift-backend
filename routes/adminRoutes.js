import express from 'express'
import { protectAdmin } from '../middleware/auth.js'
import { adminController } from '../controllers/adminController.js'


const adminRouter = express.Router()

adminRouter.get('/is-admin', protectAdmin, adminController.isAdmin)
adminRouter.get('/dashboard', protectAdmin, adminController.getDashboardData)
adminRouter.get('/all-shows', protectAdmin, adminController.getAllShowsFromDB)
adminRouter.get('/all-bookings', protectAdmin, adminController.getAllBookingsFromDB)

export default adminRouter;