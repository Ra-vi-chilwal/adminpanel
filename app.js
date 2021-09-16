const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
require("dotenv/config");
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

const upload = multer({
	storage: storage,
});

//Import Router

const postsRoute = require("./routes/posts");
const addresscheckRoute = require("./routes/addresscheck");
const addressfieldRoute = require("./routes/addressfield");
const addressoperRoute = require("./routes/addressoper");
const gapcheckRoute = require("./routes/gapcheck");
const gapcheckoperRoute = require("./routes/gapcheckoper");
const cibilverificationRoute = require("./routes/cibilverification");
const companyverificationRoute = require("./routes/companyverification");
const companyphyvisitRoute = require("./routes/companyphyvisit");
const checkthroughecourtRoute = require("./routes/checkthroughecourt");
const drugtestRoute = require("./routes/drugtest");
const educationcheckRoute = require("./routes/educationcheck");
const form16Route = require("./routes/form16");
const gdatabaseRoute = require("./routes/gdatabase");
const employeeregisterRouter = require("./routes/employeeregister");
//appuse
app.use("/addresscheck", addresscheckRoute);
app.use("/addressfield", addressfieldRoute);
app.use("/addressoper", addressoperRoute);
app.use("/posts", postsRoute);
app.use("/gapcheck", gapcheckRoute);
app.use("/gapcheckoper", gapcheckoperRoute);
app.use("/cibilverification", cibilverificationRoute);
app.use("/companyverification", companyverificationRoute);
app.use("/companyphyvisit", companyphyvisitRoute);
app.use("/checkthroughecourt", checkthroughecourtRoute);
app.use("/drugtest", drugtestRoute);
app.use("/educationcheck", educationcheckRoute);
app.use("/form16", form16Route);
app.use("/gdatabase", gdatabaseRoute);
app.use("/employeeregister", employeeregisterRouter);
//userdefine
app.get("/", (req, res) => {
	res.send("we are on home");
});
//for image upload
// const upload = multer({
// 	dest: "./upload/images",
// });
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
app.listen(8000);
