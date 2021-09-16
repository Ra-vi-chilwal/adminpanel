const express = require("express");
const CompanyPhyVisit = require("../modles/CompanyPhyVisit");
const router = express.Router();

//for get request
router.get("/", async (req, res) => {
	try {
		const companyphyvisit = await CompanyPhyVisit.find();
		res.json(companyphyvisit);
	} catch (err) {
		res.json({ message: err });
	}
	res.send("We are on check");
});

//for post request :
router.post("/", (req, res) => {
	const companyphyvisit = new CompanyPhyVisit({
		meetingpersonname: req.body.meetingpersonname,
		meetingpersoncontactnumber: req.body.meetingpersoncontactnumber,
		mailIDofcompanyorperson: req.body.mailIDofcompanyorperson,
		designationofmeetingperson: req.body.designationofmeetingperson,
	});

	companyphyvisit
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
