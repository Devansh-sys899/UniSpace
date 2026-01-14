const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'email already exists']
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['User', 'Admin', 'Manager'],
        default: 'User'
    }
}, { timestamps : true });

module.exports = new mongoose.model('User', userSchema);