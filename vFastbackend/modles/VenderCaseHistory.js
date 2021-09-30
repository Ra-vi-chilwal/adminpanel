
const mongoose = require("mongoose");

const VenderCaseHistorySchema = mongoose.Schema({
    clientId:{
      type:String
    },
     caseId: {
		type: String,
		required: true,
	},
    
	candidatename: {
		type: String,
		required: true,
	},
	Fname: {
		type: String,
		required: true,
	},
	
	Mname: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	contactnumber: {
		type: String,
		required: true,
	},
	

	
	address: {
		type: String,
		required: true,
	},
	street: {
		type: String,
		required: true,
	},
    landmark: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	
	pincode: {
		type: String,
		required: true,
	},
	c_address: {
		type: String,
		required: true,
	},
	c_street: {
		type: String,
		required: true,
	},
    c_landmark: {
		type: String,
		required: true,
	},
	c_city: {
		type: String,
		required: true,
	},
	c_state: {
		type: String,
		required: true,
	},
	c_country: {
		type: String,
		required: true,
	},
	
	c_pincode: {
		type: String,
		required: true,
	},
	companyname: {
		type: String,
		required: true,
	},


	contact: {
		type: String,
		required: true,
	},
	
    vendorname: {
		type: String,
		required: true,
	},
    v_city: {
		type: String,
		required: true,
	},
    price: {
		type: String,
		required: true,
	},
    TAT: {
		type: String,
		required: true,
	},
    venderstatus:{
        type:String,
        required:true,
    },
    // vendorimg : {
    //     type:String,
    //     required:true
    // },
   
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("VenderCaseHistory", VenderCaseHistorySchema);
