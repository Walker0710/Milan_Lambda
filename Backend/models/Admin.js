const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const Admin = mongoose.model('Admin', adminSchema, 'Admin');
module.exports = Admin;