const express = require("express");
const router = express.Router();
const EmployeeRegister = require("../modles/EmployeeRegister");

//for get request
router.get('/',async(req,res) => {
    try{
           const employeeregister = await EmployeeRegister.find()
           res.json(employeeregister)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const employyeregister = await EmployeeRegister.findById(req.params.id)
           res.json(employyeregister)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const employeeregister = await EmployeeRegister.findById(req.params.id) 
        employeeregister.name = req.body.name
        const a1 = await employeeregister.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

//for post request :
router.post("/", (req, res) => {
	const employeeregister = new EmployeeRegister({
		name: req.body.name,
		Fname: req.body.Fname,
		mobile: req.body.mobile,
		email: req.body.email,
		address1: req.body.address1,
		address2: req.body.address2,
		place: req.body.place,
		city: req.body.city,
		district: req.body.district,
		state: req.body.state,
		zipcode: req.body.zipcode,
		state: req.body.state,
		country: req.body.country,
		Alternatemobile: req.body.Alternatemobile,
	});

	employeeregister
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
