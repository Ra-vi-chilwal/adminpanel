const mongoose = require("mongoose");

const AddresscheckSchema = mongoose.Schema({
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
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Addresschecks", AddresscheckSchema);
