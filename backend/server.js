import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js' // <--- Import this
import connectCloudinary from './config/cloudinary.js'
import doctorRouter from './routes/doctorRoute.js'
import adminRouter from './routes/adminroute.js'
import userRouter from './routes/userroute.js'
// app config
const app = express()
const port = process.env.PORT || 4000
connectDB() // <--- Run this
connectCloudinary()

console.log("My Mongo URI is:", process.env.MONGODB_URI)
// middlewares
app.use(express.json())
app.use(cors())

// api endpoints

app.use('/api/admin', adminRouter)
//localhost:4000/api.admin
app.use('/api/doctor', doctorRouter)
app.use('/api/user',userRouter)
app.get('/', (req, res) => {
    res.send('API Working')
})

app.listen(port, () => console.log('Server started on PORT ' + port))