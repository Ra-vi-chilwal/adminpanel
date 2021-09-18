const express = require("express");
const router = express.Router();
const ClientRelationship = require("../modles/ClientRelationship");

//for get request
router.get('/',async(req,res) => {
    try{
           const clientrelationship = await ClientRelationship.find()
           res.json(clientrelationship)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const clientrelationship = await ClientRelationship.findById(req.params.id)
           res.json(clientrelationship)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const clientrelationship = await ClientRelationship.findById(req.params.id) 
        clientrelationship.name = req.body.name
        const a1 = await clientrelationship.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

//for post request :
router.post("/", (req, res) => {
	const clientrelationship = new ClientRelationship({
		name: req.body.name,
		Fname: req.body.Fname,
		contactnumber: req.body.contactnumber,
		email: req.body.email,
		registrationno: req.body.registrationno,
        place: req.body.place,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        district: req.body.district,
        state: req.body.state,
        zipcode: req.body.zipcode,
        
		country: req.body.country,


	});

	clientrelationship
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
