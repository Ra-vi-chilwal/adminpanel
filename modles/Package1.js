
const mongoose = require("mongoose");

const Package1Schema = mongoose.Schema({
	candidatename: {
		type: String,
		required: true,
	},
	Fname: {
		type: String,
		required: true,
	},
	
	address: {
		type: String,
		required: true,
	},
	pincode: {
		type: Number,
		required: true,
	},
	contactnumber: {
		type: Number,
		required: true,
	},
	companyname: {
		type: String,
		required: true,
	},
	periodofstay: {
		type: String,
		
	},
    Board: {
		type: String,
		required: true,
	},
    yearIn: {
		type: String,
		required: true,
	},
    yearOut: {
		type: String,
		required: true,
	},
    university: {
		type: String,
		required: true,
	},
    institute: {
		type: String,
		required: true,
	},
    gender: {
		type: String,
		required: true,
	},
    Mname: {
		type: String,
		required: true,
	},
    
    DOB: {
		type: String,
		required: true,
	},
    email: {
		type: String,
		required: true,
	},
    Aadharno: {
		type: String,
		required: true,
	},
    candidaterefname: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Package1s", Package1Schema);
