const express = require("express");
const router = express.Router();
const Gapcheckoper = require("../modles/Gapcheckoper");

//for get request
router.get("/", async (req, res) => {
	try {
		const gapcheckoper = await Gapcheckoper.find();
		res.json(gapcheckoper);
	} catch (err) {
		res.json({ message: err });
	}
	res.send("We are on check");
});

//for post request :

router.post("/", (req, res) => {
	const gapcheckoper = new Gapcheckoper({
		name: req.body.name,
		FcompanydetailDuringfirstemployment:
			req.body.FcompanydetailDuringfirstemployment,
		Fcompanydetailsworking: req.body.Fcompanydetailsworking,
		ScompanydetailsDuringfirstemployment:
			req.body.ScompanydetailsDuringfirstemployment,
		Durationofsecondcompanyworking: req.body.Durationofsecondcompanyworking,
		Reasonofgap: req.body.Reasonofgap,
		candidatecontactnumber: req.body.candidatecontactnumber,
		foundanycriminalactivity: req.body.foundanycriminalactivity,
		criminalactivityinGap: req.body.criminalactivityinGap,
	});

	gapcheckoper
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
