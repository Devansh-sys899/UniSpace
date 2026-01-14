const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
require('dotenv').config();

const handleRegister = async (req,res) => {
    const { name, email, password, role } = req.body;

    if(!name || !email || !password ) {
        return res.status(400).json({ success: false, message: 'All fields are required'});
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        role
    });

    await newUser.save();

    const id = newUser._id;
    const token = JWT.sign({ id: newUser._id }, process.env.JWT_SECRET);

    res.cookie('token', token);
    return res.status(201).json({ 
        success : true, 
        message: 'User registered successfully'
    });
}
    
const handleLogin = async(req,res) => {
    const { email, password } = req.body;
        
    const user = await User.findOne({ email }).select('+password');
    if(!user) {
        return res.status(400).json({ success: false, message: 'Invalid Email or password'});
    }
        
    const matchpassword = await bcrypt.compare(password, user.password);
    if(!matchpassword) {
        return res.status(400).json({ success: false, message: 'Invalid Email or password'});
    }

    const token = JWT.sign({ id: user.id }, process.env.JWT_SECRET);
    res.cookie('token', token);
    return res.status(200).json({
        success : true, 
        message: 'User logged in successfully',
        user: user
        });
}

const getMe = async (req,res) => {
    if(!req.user) {
        return res.status(404).json({
            success: false,
            message: 'The user has not been found'
        })
    }

    const isAdmin = req.user.role === 'Admin' ? true : false

    return res.status(200).json({
        success: true,
        user: req.user,
        isAdmin: isAdmin
    })
}

module.exports = { handleRegister, handleLogin, getMe };