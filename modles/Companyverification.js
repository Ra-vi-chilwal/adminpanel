const mongoose = require("mongoose");

const CompanyverificationSchema = mongoose.Schema({
	companyname: {
		type: String,
		required: true,
	},
	clientname: {
		type: String,
		required: true,
	},
	contactpersonname: {
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
	pincode: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Companyverifications", CompanyverificationSchema);
