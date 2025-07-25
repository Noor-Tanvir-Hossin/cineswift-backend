import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
import showRouter from './routes/showRoute.js'
import bookingRouter from './routes/bookingRoute.js'
import userRouter from './routes/userRoutes.js'
import adminRouter from './routes/adminRoutes.js';



const app=express()
const port = 3000

await connectDB()

app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())


app.get('/',(req, res)=> res.send('server is alive'))
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use('/api/show', showRouter)
app.use('/api/booking', bookingRouter)
app.use('/api/admin', adminRouter)
app.use('/api/user', userRouter)

app.listen(port, ()=> console.log(`Server listening at port : ${port}`))