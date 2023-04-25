const mongoose = require('mongoose');
const User = require('../models/User');
const sampleData = require('./sample_data.json');

let _db = null;
const MONGO_URI = process.env.MONGO_URI;

const connectDB = callback => {
    mongoose.connect(
        MONGO_URI
    ).then(client => {
        // console.log(_db);
        _db = mongoose.connection;
        // User.insertMany(sampleData).then((docs, err) => {
        //         if (err) console.log(err);
        //         console.log('Sample data loaded successfully');
        // });

        console.log('DB connected');
        callback();//Calling the callback function (start the server)
    }).catch((error) => {
        console.log(error);
    })
}

const getDB = () => {
    if(_db)
        return _db
    throw new Error('connection failed');
}


module.exports = {connectDB, getDB};