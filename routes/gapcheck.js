const express = require("express");
const router = express.Router();
const Gapcheck = require("../modles/Gapcheck");

//for get request
router.get("/", async (req, res) => {
	try {
		const gapcheck = await Gapcheck.find();
		res.json(gapcheck);
	} catch (err) {
		res.json({ message: err });
	}
	res.send("We are on check");
});

//for post request :

router.post("/", (req, res) => {
	const gapcheck = new Gapcheck({
		name: req.body.name,
		Fcompanydetails: req.body.Fcompanydetails,
		Scompanydetails: req.body.Scompanydetails,
		Durationoffirstcompany: req.body.Durationoffirstcompany,
		Durationofsecondcompany: req.body.Durationofsecondcompany,
		Reasonofgap: req.body.Reasonofgap,
		candidatecontactnumber: req.body.candidatecontactnumber,
	});

	gapcheck
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
