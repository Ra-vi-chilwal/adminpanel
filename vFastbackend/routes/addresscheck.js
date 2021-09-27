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
        //const result=await Addresscheck.findByIdAndDelete(id);
    addresscheck.name = req.body.name
        const a1 = await addresscheck.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }


})
//delete req
router.delete('/:id',async(req,res)=> {
    try{
       // const addresscheck = await Addresscheck.findById(req.params.id) 
        const addresscheck =await Addresscheck.findByIdAndDelete(req.params.id);

      
        res.json(addresscheck)   
    }catch(err){ 
        res.send('Error',err)
    }


})

// router.delete("/:id",async(req,res)=>{
//     const id = req.params.id;
//     try{
//         const result=await Addresscheck.findByIdAndDelete(id);

//         res.send(result)
//     }catch(error){
//         console.log(error.message)
//     }
// })

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

// clientId:req.body.clientId,
// caseId:req.body.caseId,
// candidatename: req.body.candidatename,
// vendorimg:req.file.filename
// Fname: req.body.Fname,
// Mname:req.body.Mname,
// gender: req.body.gender,
// email:req.body.email,
// contactnumber: req.body.contactnumber,
// DOB:req.body.DOB,
// Aadharno:req.body.Aadharno,
// address: req.body.address,
// pincode: req.body.pincode,
// companyname: req.body.companyname,
// referencename: req.body.referencename,
// referececontactno: req.body.referececontactno,
// refereceaddress: req.body.refereceaddress,
// nameofemp:req.body.nameofemp,
// contactdetails:req.body.contactdetails,
// contact: req.body.contact,
// offerexp: req.body.offerexp,
// Board:req.body.Board,
// yearIn: req.body.yearIn,
// yearOut: req.body.yearOut,
// remark: req.body.remark,
// detailremark:req.body.detailremark,
// vendorname:req.body.vendorname,
// city:req.body.city,
// price:req.body.price,
// TAT:req.body.TAT
