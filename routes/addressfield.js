const express = require("express");
const router = express.Router();
const AddressField = require("../modles/AddressField");

//for get request
router.get("/", async (req, res) => {
	try {
		const addressfield = await AddressField.find();
		res.json(addressfield);
	} catch (err) {
		res.json({ message: err });
	}
	res.send("We are on check");
});
//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const addresscheck = await Addresscheck.findById(req.params.id) 
    addresscheck.name = req.body.name
        const a1 = await addresscheck.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
//for post request :
router.post("/", (req, res) => {
	const addressfield = new AddressField({
		meetingpersonname: req.body.meetingpersonname,
		meetingpersonconnumber: req.body.meetingpersonconnumber,
		idofmeeting: req.body.idofmeeting,
		residentialstatus: req.body.residentialstatus,
		relationwithcandidate: req.body.relationwithcandidate,
		numberoffamilymember: req.body.numberoffamilymember,
		dateofvarification: req.body.dateofvarification,
		remark: req.body.remark,
	});

	addressfield
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;

//http://localhost:3000/addressfield
