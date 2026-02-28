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
    origin: 'https://unispace-git-main-dishanahar791-7222s-projects.vercel.app',
    credentials: true
}))
app.use(cookie_parser());
app.use(express.json());
connectDB();

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/booking', bookingRoutes);
app.use('/api/v1/resource', resourceRoutes);

app.get('/', (req,res) => {
    return res.status(200).json({
        success: true,
        message: 'Welcome to the UniSpace, this is the home route'
    })
})

app.listen(8000, () => {
    console.log('Server is listening on the port');
})