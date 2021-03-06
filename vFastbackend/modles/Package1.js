
const mongoose = require("mongoose");

const Package1Schema = mongoose.Schema({
	CaseId: {
		type: String,
		required: true,
	},
	ClientId: {
		type: String,
		required: true,
	},
	Fname: {
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

	DOB: {
		type: String,
		required: true,
	},
	Aadharno: {
		type: String,
		required: true,
	},

	address: {
		type: String,
		required: true,
	},
	pincode: {
		type: String,
		required: true,
	},

	companyname: {
		type: String,
		required: true,
	},
	referencename: {
		type: String,
		required: true,
	},
	referececontactno: {
		type: String,
		required: true,
	},
	refereceaddress: {
		type: String,
		required: true,
	},
	nameofemp: {
		type: String,
		required: true,
	},
	contactdetails: {
		type: String,
		required: true,
	},
	contact: {
		type: String,
		required: true,
	},
	offerexp: {
		type: String,
		required: true,
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
	remark: {
		type: String,
		required: true,
	},
	detailremark: {
		type: String,
		required: true,
	},

	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Packages1", Package1Schema);
