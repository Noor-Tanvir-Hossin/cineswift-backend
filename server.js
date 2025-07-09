import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'

const app=express()
const port = 3000

await connectDB()

app.use(express.json())
app.use(cors())


app.get('/',(req, res)=> res.send('server is alive'))

app.listen(port, ()=> console.log(`Server listening at port : ${port}`))