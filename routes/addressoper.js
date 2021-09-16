const express = require("express");
const router = express.Router();
const AddressOper = require("../modles/AddressOper");

//for get request
router.get("/", async (req, res) => {
	try {
		const addressoper = await AddressOper.find();
		res.json(addressoper);
	} catch (err) {
		res.json({ message: err });
	}
	res.send("We are on check");
});

//for post request :

router.post("/", (req, res) => {
	const addressoper = new AddressOper({
        clientID:req.body.clientID,
		name: req.body.name,
		Fname: req.body.Fname,
		address: req.body.address,
		pincode: req.body.pincode,
		contactnumber: req.body.contactnumber,
		companyname: req.body.companyname,
		periodofstay: req.body.periodofstay,
	});

	addressoper
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;
