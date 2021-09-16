const express = require("express");
const Drugtest = require("../modles/Drugtest");
const router = express.Router();

//for get request
router.get("/", async (req, res) => {
	try {
		const drugtest = await Drugtest.find();
		res.json(drugtest);
	} catch (err) {
		res.json({ message: err });
	}
	res.send("We are on check");
});

//for post request :

router.post("/", (req, res) => {
	const drugtest = new Drugtest({
		candidatenname: req.body.candidatenname,
		candidatecontactnumber: req.body.candidatecontactnumber,
		gender: req.body.gender,
		address: req.body.address,
		pincode: req.body.pincode,
		dateofbirth: req.body.dateofbirth,
		substanceAbusedPanel: req.body.substanceAbusedPanel,
		collectiontimeperiod: req.body.collectiontimeperiod,
	});

	drugtest
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
