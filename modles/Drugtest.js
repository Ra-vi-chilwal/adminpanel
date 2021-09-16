const mongoose = require("mongoose");

const DrugtestSchema = mongoose.Schema({
	candidatenname: {
		type: String,
		required: true,
	},
	candidatecontactnumber: {
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
	dateofbirth: {
		type: String,
		required: true,
	},
	pincode: {
		type: String,
		required: true,
	},
	substanceAbusedPanel: {
		type: String,
		required: true,
	},
	collectiontimeperiod: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Drugtests", DrugtestSchema);
