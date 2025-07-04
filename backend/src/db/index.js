const mongoose = require('mongoose');


const connectDB = async() =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/BlogApp');
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log('mongodb connection failed', error);
    }
}

module.exports = connectDB;