const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ['Equipment', 'Room', 'Desk'],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: '',
    },
    capacity: {
        type: Number,
        required: true,
        default: 1
    },
    hourlyRate: {
        type: Number,
        required: true,
        min: 0
    }, 
    isAvailable: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = new mongoose.model('Resource', resourceSchema);