const express = require("express");
const router = express.Router();
const CIBILVerification = require("../modles/CIBILVerification");

//for get request
router.get("/", async (req, res) => {
	try {
		const cibilverification = await CIBILVerification.find();
		res.json(cibilverification);
	} catch (err) {
		res.json({ message: err });
	}
	res.send("We are on check");
});

//for post request :

router.post("/", (req, res) => {
	const cibilverification = new CIBILVerification({
		name: req.body.name,
		Fname: req.body.Fname,
		DateofBirth: req.body.DateofBirth,
		Address: req.body.Address,
		Gender: req.body.Gender,
		CandidateMobilenumber: req.body.CandidateMobilenumber,
	});

	cibilverification
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;

//http://localhost:3000/addresscheck
