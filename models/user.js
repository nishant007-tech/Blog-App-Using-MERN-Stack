const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    photo: {
        type: String,
        // required: true,
        // default:
        //     "https://res.cloudinary.com/geekysrm/image/upload/v1542221619/default-user.png"
    },
    date: {
        type: String,
        default: new Date().toDateString()
    }
});

module.exports = mongoose.model('User', userSchema);