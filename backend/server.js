const express = require('express');
const { connectDB } = require('./Config/db');
const cors = require('cors');
const authRoutes = require('./Routes/userRoutes'); 
const bookingRoutes = require('./Routes/bookingRoutes'); 
const resourceRoutes = require('./Routes/resourceRoutes'); 
const cookie_parser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookie_parser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/booking', bookingRoutes);
app.use('/api/v1/resource', resourceRoutes);

app.get('/', (req,res) => {
    console.log('Welcome to the Unispace');
    return res.status(200).json({
        success: true,
        message: 'Welcome to the UniSpace'
    })
})

app.listen(8000, () => {
    console.log('Server is listening on the port');
})