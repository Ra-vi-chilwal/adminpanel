const mongoose = require("mongoose");

const CheckthroughEcourtSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	Fname: {
		type: String,
		required: true,
	},
	Dateofbirth: {
		type: String,
		required: true,
	},
	pancard: {
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

	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("CheckthroughEcourts", CheckthroughEcourtSchema);
