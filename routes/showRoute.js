import express from 'express'
import { ShowController } from '../controllers/showController.js'
import { protectAdmin } from '../middleware/auth.js'


const showRouter = express.Router()

showRouter.get('/now-playing',protectAdmin, ShowController.getNowPlayingMovies)
showRouter.post('/add',protectAdmin, ShowController.addShow)

export default showRouter