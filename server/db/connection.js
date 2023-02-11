const mongoose = require('mongoose');

const conn = mongoose.connect(process.env.ATLAS_URI)

    .then(db =>{
        console.log('Database connected');
        return db;
    }).catch(err =>{
        console.log('Connection failed here')

        console.log(err)
    })




    module.exports = conn;