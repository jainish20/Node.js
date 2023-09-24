const router = require('express').Router();
const student = require("../models/students")
const multer= require("multer");

const storage = multer.diskStorage({
   destination: (req, filename, cb) => {
      cb(null, "uploads/");
   },
   filename: (req, fileName, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(
        null,
        fileName.fieldname +
          "-" +
          uniqueSuffix +
          "." +
          fileName.originalname.split(".").pop()
      );
    },
  });
  
// router.get('/',async (req, res) => { 
//  const students = await Student.find().then((students) =>{
//     res.render("index", { students: students});
//  })
//    .catch((error) => {
//     console.log(error);
//    });
// });

const upload = multer({ storage: storage });

router.post("/", upload.single("fileName"), (req, res) => {
const fileName = req.file.filename;
const { name, email, password } = req.body;
const newStudent = new student({ name, email, password, fileName });
newStudent
  .save()
  .then((students) => {
    res.send("student registered successfully");
  })
  .catch((err) => {
    console.log(err);
  });
});

router.post("/multiple", upload.array("fileNames", 5), (req, res) => {
   const fileNames = req.files.map((file) => file.filename);
   console.log(fileNames);
   const { name, email, password } = req.body;
   const newStudent = new student({
     name,
     email,
     password,
     fileName: fileNames,
   });
 
   newStudent
     .save()
     .then((students) => {
       res.send("student registered successfully");
     })
     .catch((err) => {
       console.log(err);
     });
 });

module.exports = router;