const mongoose = require("mongoose");

const AddresscheckSchema = mongoose.Schema({
	clientid:{
		type: String,
		required: true,	
	},
	name: {
		type: String,
		required: true,
	},
	Fname: {
		type: String, 
		required: true,
	},
	
	street: {
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
	contactnumber: {
		type: String,
		required: true,
	},
	companyname: {
		type: String,
		required: true,
	},
	periodofstay: {
		type: String,
		
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Addresschecks", AddresscheckSchema);
