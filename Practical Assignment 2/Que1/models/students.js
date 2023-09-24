const mongoose = require("../config/db");


 const StudentSchema = new mongoose.Schema({
    name :String,
    email: String,
    password: String,
    fileName: [String],
 });

 const Student = mongoose.model("Student", StudentSchema);

 module.exports = Student;
 