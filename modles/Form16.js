const mongoose = require("mongoose");

const Form16Schema = mongoose.Schema({
	candidatenname: {
		type: String,
		required: true,
	},
	Fathername: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},

	pancard: {
		type: String,
		required: true,
	},

	dateofbirth: {
		type: String,
		required: true,
	},
	candidatecontactnumber: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Form16s", Form16Schema);
