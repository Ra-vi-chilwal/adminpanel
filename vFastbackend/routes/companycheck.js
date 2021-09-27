const express = require("express");
const router = express.Router();
const Companycheck = require("../modles/Companycheck");

//for get request
router.get('/',async(req,res) => {
    try{
           const companycheck = await Companycheck.find()
           res.json(companycheck)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const companycheck = await Companycheck.findById(req.params.id)
           res.json(companycheck)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const companycheck = await companycheck.findById(req.params.id) 
        //const result=await Addresscheck.findByIdAndDelete(id);
        companycheck.name = req.body.name
        const a1 = await companycheck.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }


})
//delete req
router.delete('/:id',async(req,res)=> {
    try{
       // const addresscheck = await Addresscheck.findById(req.params.id) 
        const companycheck =await Companycheck.findByIdAndDelete(req.params.id);

      
        res.json(companycheck)   
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
	const companycheck = new Companycheck({
		name: req.body.name,
		Fname: req.body.Fname,
		address: req.body.address,
		pincode: req.body.pincode,
		contactnumber: req.body.contactnumber,
		companyname: req.body.companyname,
		periodofstay: req.body.periodofstay,

	});

	companycheck
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
