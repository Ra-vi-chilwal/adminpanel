const mongoose = require("mongoose");

const CIBILVerificationSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	Fname: {
		type: String,
		required: true,
	},
	DateofBirth: {
		type: String,
		required: true,
	},
	Address: {
		type: String,
		required: true,
	},
	Gender: {
		type: String,
		required: true,
	},
	CandidateMobilenumber: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("CIBILVerifications", CIBILVerificationSchema);
