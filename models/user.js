const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, dropDups: true,  lowercase: true },
    password: String,
    username: String,
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE', 'OTHER']
    },
    phone: Number
});

module.exports = mongoose.model('User', userSchema);
