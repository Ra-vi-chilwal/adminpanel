const mongoose = require("mongoose");

const GdatabaseSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	gender: {
		type: String,
		required: true,
	},
	dateofbirth: {
		type: String,
		required: true,
	},
	fname: {
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

	candidatecontactnumber: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Gdatabases", GdatabaseSchema);
