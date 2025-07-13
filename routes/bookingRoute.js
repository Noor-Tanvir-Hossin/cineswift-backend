import express from 'express'
import { bookingController } from '../controllers/bookingController.js'



const bookingRouter = express.Router()

bookingRouter.post('/create', bookingController.createBooking)
bookingRouter.post('/booked-seats', bookingController.getOccupiedSeats)

export default bookingRouter