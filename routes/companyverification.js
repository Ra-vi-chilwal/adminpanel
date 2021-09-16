const express = require("express");
const router = express.Router();
const Companyverificattion = require("../modles/Companyverification");

//for get request
router.get("/", async (req, res) => {
	try {
		const companyverificattion = await Companyverificattion.find();
		res.json(companyverificattion);
	} catch (err) {
		res.json({ message: err });
	}
	res.send("We are on check");
});

//for post request :
router.post("/", (req, res) => {
	const companyverificattion= new Companyverificattion({
		companyname: req.body.companyname,
		clientname: req.body.clientname,
		contactpersonname: req.body.contactpersonname,
		contactnumber: req.body.contactnumber,
		address: req.body.address,
		pincode: req.body.pincode,
		
        
	});

	companyverificattion
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