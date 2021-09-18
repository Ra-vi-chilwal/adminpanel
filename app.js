const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const url = "mongodb://localhost/CRUDapi"

app.use(bodyParser.json());

//storage engine

const storage = multer.diskStorage({
	destination: "./upload/images",
	filename: (req, file, cb) => {
		return cb(
			null,
			`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
		);
	},
});



//Import Router


const addresscheckRoute = require("./routes/addresscheck");
const clientrelationshipRoute = require("./routes/clientrelationship");
//appuse
app.use("/addresscheck", addresscheckRoute);
app.use("/clientrelationship", clientrelationshipRoute);

//userdefine
app.get("/", (req, res) => {
	res.send("we are on home");
});
//for image upload
const upload = multer({
	dest: "./upload/images",
});
app.use("/profile", express.static("upload/images"));
app.post("/upload", upload.single("profile"), (req, res) => {
	console.log(req.file);
	res.json({
		success: 1,
		profile_url: `http://loaclhost:3000/profile/${req.file.filename}`,
	});
});

app.get("/posts", (req, res) => {
	res.send("we are on posts page ");
});
//connect to DB
mongoose.connect(url, { useNewUrlParser: true }, () => {
	console.log("connect to Database");
});
app.listen(3000);
