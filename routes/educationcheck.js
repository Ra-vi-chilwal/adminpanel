const express = require("express");
const Educationcheck = require("../modles/Educationcheck");
const router = express.Router();

//for get request
router.get("/", async (req, res) => {
	try {
		const educationcheck = await Educationcheck.find();
		res.json(educationcheck);
	} catch (err) {
		res.json({ message: err });
	}
	res.send("We are on check");
});

//for post request :

router.post("/", (req, res) => {
	const educationcheck = new Educationcheck({
		candidatenname: req.body.candidatenname,
		gender: req.body.gender,
		address: req.body.address,
		pincode: req.body.pincode,
		mothername: req.body.mothername,
		Fatherorhusbandname: req.body.Fatherorhusbandname,
		dateofbirth: req.body.dateofbirth,
		candidatecontactnumber: req.body.candidatecontactnumber,
	});

	educationcheck
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;
//http://localhost:3000/gapcheck
