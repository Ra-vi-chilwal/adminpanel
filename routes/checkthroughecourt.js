const express = require("express");
const CheckthroughEcourt = require("../modles/CheckthroughEcourt");
const router = express.Router();

//for get request
router.get("/", async (req, res) => {
	try {
		const checkthroughecourt = await CheckthroughEcourt.find();
		res.json(checkthroughecourt);
	} catch (err) {
		res.json({ message: err });
	}
	res.send("We are on check");
});

//for post request :
router.post("/", (req, res) => {
	const checkthroughecourt = new CheckthroughEcourt({
		name: req.body.name,
		Fname: req.body.Fname,
		Dateofbirth: req.body.Dateofbirth,
		pancard: req.body.pancard,
		address: req.body.address,
		pincode: req.body.pincode,
		contactnumber: req.body.pincode,
	});

	checkthroughecourt
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
