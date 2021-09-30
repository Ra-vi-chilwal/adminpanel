const express = require("express");
const router = express.Router();
const VenderCaseHistory = require("../modles/venderCaseHistory");
const multer = require("multer");


var storage=multer.diskStorage({
    distination:function(req,file,cb){
         cb(null,"./upload/images")
        // cb(null,Date.now()+file.originalname)
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})
var upload=multer({storage:storage});
//for get request
router.get('/',async(req,res) => {
    try{
           const vendercasehistory = await VenderCaseHistory.find()
           res.json( vendercasehistory)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const  vendercasehistory = await VenderCaseHistory.findById(req.params.id)
           res.json( vendercasehistory)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const  vendercasehistory = await VenderCaseHistory.findById(req.params.id) 
        //const result=await Addresscheck.findByIdAndDelete(id);
        vendercasehistory.name = req.body.name
        const a1 = await  vendercasehistory.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }


})
//delete req
router.delete('/:id',async(req,res)=> {
    try{
       // const addresscheck = await Addresscheck.findById(req.params.id) 
        const  vendercasehistory =await VenderCaseHistory.findByIdAndDelete(req.params.id);

      
        res.json( vendercasehistory)   
    }catch(err){ 
        res.send('Error',err)
    }


})



//for post request :
router.post("/",upload.single('vendorimg'), (req, res) => {
	const  vendercasehistory = new VenderCaseHistory({


        clientId:req.body.clientId,
        caseId:req.body.caseId,
        candidatename: req.body.candidatename,
        Fname: req.body.Fname,
        Mname:req.body.Mname,
        gender: req.body.gender,
        email:req.body.email,
        contactnumber: req.body.contactnumber,
        address: req.body.address,
        street:req.body.street,
        landmark:req.body.landmark,
        city: req.body.city,
        state:req.body.state,
        country: req.body.country,
        pincode: req.body.pincode,
        c_address: req.body.c_address,
        c_street:req.body.c_street,
        c_landmark:req.body.c_landmark,
        c_city: req.body.c_city,
        c_state:req.body.c_state,
        c_country: req.body.c_country,
        c_pincode: req.body.c_pincode,
        companyname: req.body.companyname,
        contact: req.body.contact,
        vendorname:req.body.vendorname,
        v_city:req.body.v_city,
        price:req.body.price,
        TAT:req.body.TAT,
        venderstatus:req.body.venderstatus


	});

    vendercasehistory
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;
