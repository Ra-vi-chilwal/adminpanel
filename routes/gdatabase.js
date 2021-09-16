const express = require("express");
const router = express.Router();
const Gdatabase = require("../modles/Gdatabase");
//for get  request :
router.get("/", async(req, res) => {
	try{
		const gdatabase = await Gdatabase.find();
		res.json(gdatabase);
	} catch (err){
		res.json({message:err})
	}
	res.send("We are on check");
});
//for post request :
router.post("/", (req, res) => {
	const gdatabase = new Gdatabase({
		name: req.body.name,
		gender: req.body.gender,
		dateofbirth: req.body.dateofbirth,
        fname: req.body.fname,
		address: req.body.address,
		pincode: req.body.pincode,
		candidatecontactnumber: req.body.candidatecontactnumber,
	});

	gdatabase
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