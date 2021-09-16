const mongoose = require("mongoose");

const GapcheckSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	Fcompanydetails: {
		type: String,
		required: true,
	},
	Scompanydetails: {
		type: String,
		required: true,
	},
	Durationoffirstcompany: {
		type: String,
		required: true,
	},
	Durationofsecondcompany: {
		type: String,
		required: true,
	},
	Reasonofgap: {
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
module.exports = mongoose.model("Gapchecks", GapcheckSchema);
