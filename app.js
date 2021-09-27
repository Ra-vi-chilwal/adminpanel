const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const url = "mongodb://localhost/CRUDapi"

app.use(bodyParser.json());

//storage engine
// const express = require('express');
// const app = express();
// const multer = require("multer");
// const path = require("path");

// storage engine 

// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 100000
//     }
// })
// app.use('/profile', express.static('upload/images'));
// app.post("/upload", upload.single('profile'), (req, res) => {

//     res.json({
//         success: 1,
//         profile_url: `http://localhost:4000/profile/${req.file.filename}`
//     })
// })

// function errHandler(err, req, res, next) {
//     if (err instanceof multer.MulterError) {
//         res.json({
//             success: 0,
//             message: err.message
//         })
//     }
// }
// app.use(errHandler);
// app.listen(4000, () => {
//     console.log("server up and running");
// })




//Import Router


const addresscheckRoute = require("./routes/addresscheck");
const clientrelationshipRoute = require("./routes/clientrelationship");
const clientregistrationRoute = require("./routes/clientregistration");
const package1Route = require("./routes/package1");
//appuse
app.use("/addresscheck", addresscheckRoute);
app.use("/clientrelationship", clientrelationshipRoute);
app.use("/clientregistration", clientregistrationRoute);
app.use("/package1", package1Route);
//app.use('/profile', express.static('upload/images'));

//userdefine
app.get("/", (req, res) => {
	res.send("we are on home");
});
//for image upload

app.get("/posts", (req, res) => {
	res.send("we are on posts page ");
});
//connect to DB
mongoose.connect(url, { useNewUrlParser: true }, () => {
	console.log("connect to Database");
});
app.listen(3000);
