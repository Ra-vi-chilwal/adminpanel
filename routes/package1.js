const express = require("express");
const Package1 = require("../modles/Package1");
const router = express.Router();

//for get request
router.get('/',async(req,res) => {
    try{
           const package1 = await Package1.find()
           res.json(package1)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const package1 = await Package1.findById(req.params.id)
           res.json(package1)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const package1 = await Package1.findById(req.params.id) 
        package1.name = req.body.name
        const a1 = await package1.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

//for post request :
router.post("/", (req, res) => {
	const package1 = new Package1({
		candidatename: req.body.candidatename,
		Fname: req.body.Fname,
		address: req.body.address,
		pincode: req.body.pincode,
		contactnumber: req.body.contactnumber,
		companyname: req.body.companyname,
		periodofstay: req.body.periodofstay,
        Board:req.body.Board,
        yearIn: req.body.yearIn,
		yearOut: req.body.yearOut,
		university: req.body.university,
		institute: req.body.institute,
		gender: req.body.gender,
		Mname: req.body.Mname,
        DOB:req.body.DOB,
        email:req.body.email,
        Aadharno:req.body.Aadharno,
        candidaterefname:req.body.candidatename,
        
	});

	package1
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
