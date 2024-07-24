const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // console.log('connecting to the database')

        //connect to the database
        await mongoose.connect('mongodb+srv://puru:123@cluster0.hdwwz1p.mongodb.net/Piyush?retryWrites=true&w=majority&appName=Cluster0');
    }catch(err){
        console.log('Error while connecting database: ', err);
    }
}

module.exports = connectDB;

