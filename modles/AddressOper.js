const mongoose = require("mongoose");

const AddressOperSchema = mongoose.Schema({
    clientID: {
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
	address: {
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
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("AddressOpers", AddressOperSchema);
