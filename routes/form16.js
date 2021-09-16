const express = require("express");
const Form16 = require("../modles/Form16.js");
const router = express.Router();

//for get request
router.get("/", async (req, res) => {
	try {
		const form16 = await Form16.find();
		res.json(form16);
	} catch (err) {
		res.json({ message: err });
	}
	res.send("We are on check");
});

//for post request :

router.post("/", (req, res) => {
	const form16 = new Form16({
		candidatenname: req.body.candidatenname,
		gender: req.body.gender,
		address: req.body.address,
		pancard: req.body.pancard,
		mothername: req.body.mothername,
		Fathername: req.body.Fathername,
		dateofbirth: req.body.dateofbirth,
		candidatecontactnumber: req.body.candidatecontactnumber,
	});

	form16
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
