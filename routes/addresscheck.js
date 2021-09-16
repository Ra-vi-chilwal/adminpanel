const express = require("express");
const router = express.Router();
const Addresscheck = require("../modles/Addresscheck");

//for get request
router.get('/',async(req,res) => {
    try{
           const addresscheck = await Addresscheck.find()
           res.json(addresscheck)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const addresscheck = await Addresscheck.findById(req.params.id)
           res.json(addresscheck)
    }catch(err){
        res.send('Error ' + err)
    }
})

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
	const addresscheck = new Addresscheck({
		name: req.body.name,
		Fname: req.body.Fname,
		address: req.body.address,
		pincode: req.body.pincode,
		contactnumber: req.body.contactnumber,
		companyname: req.body.companyname,
		periodofstay: req.body.periodofstay,

	});

	addresscheck
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
