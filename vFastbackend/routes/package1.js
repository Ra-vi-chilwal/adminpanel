const express = require("express");
const Package1 = require("../modles/Package1");
const router = express.Router();
const multer = require("multer");

//for image data 
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
        Mname:req.body.Mname,
		gender: req.body.gender,
        email:req.body.email,
		contactnumber: req.body.contactnumber,
        DOB:req.body.DOB,
        Aadharno:req.body.Aadharno,
		address: req.body.address,
		pincode: req.body.pincode,
		companyname: req.body.companyname,
		referencename: req.body.referencename,
        referececontactno: req.body.referececontactno,
        refereceaddress: req.body.refereceaddress,
        nameofemp:req.body.nameofemp,
        contactdetails:req.body.contactdetails,
		contact: req.body.contact,
		offerexp: req.body.offerexp,
        Board:req.body.Board,
        yearIn: req.body.yearIn,
		yearOut: req.body.yearOut,
		remark: req.body.remark,
		detailremark:req.body.detailremark
        
	});
    
    router.delete('/:id',async(req,res)=> {
        try{
           // const addresscheck = await Addresscheck.findById(req.params.id) 
            const package1 =await Package1.findByIdAndDelete(req.params.id);
    
          
            res.json(package1)   
        }catch(err){ 
            res.send('Error',err)
        }
    
    
    })
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
