const express = require("express");
const User = require('../Models/User');
const jwt = require('jsonwebtoken');

const handleAuth = async (req,res,next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.status(400).json({
            success: false,
            message: 'Token not found'
        });
    }
    const user = await jwt.verify(token, process.env.JWT_SECRET);
    
    const matchUser = await User.findById(user.id);
    if(!matchUser) {
        return res.status(400).json({
            success: false,
            message: 'User not found'
        });
    }
    req.user = matchUser;
    next();
}

module.exports = { handleAuth };