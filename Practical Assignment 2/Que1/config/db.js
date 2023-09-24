const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://0.0.0.0:27017/Students')  
.then(()=>{
console.log("Connected successfully");
}) 
.catch((error) => {
    console.log(error);
});

module.exports = mongoose;