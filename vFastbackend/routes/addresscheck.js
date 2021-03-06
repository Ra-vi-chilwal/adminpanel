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
        clientid:req.body.clientid,
        name:req.body.name,
        Fname:req.body.Fname,
        street:req.body.street,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        pincode:req.body.pincode,
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

