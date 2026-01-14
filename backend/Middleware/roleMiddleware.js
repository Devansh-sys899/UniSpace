const express = require('express');

const restrictTo = (roles) => {
    return (req,res,next) => {
        console.log('user received from server:', req.user.role);
        if(!req.user || !req.user.role) {
            return res.status(400).json({ 
                success: false,
                message: 'Authentication failed'
            });
        }
        
        if(!roles.includes(req.user.role)) {
            return res.status(403).json({ 
                success: false,
                message: 'You are not allowed to access this route'
            });
        }

        next();
    }
}

module.exports = { restrictTo };