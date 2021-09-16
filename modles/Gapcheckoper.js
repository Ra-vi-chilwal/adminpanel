const mongoose = require("mongoose");

const GapcheckoperSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
    FcompanydetailDuringfirstemployment: {
		type: String,
		required: true,
	},
	Fcompanydetailsworking: {
		type: String,
		required: true,
	},
	ScompanydetailsDuringfirstemployment: {
		type: String,
		required: true,
	},
	Durationofsecondcompanyworking: {
		type: String,
		required: true,
	},
	foundanycriminalactivity: {
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
    criminalactivityinGap: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Gapcheckopers", GapcheckoperSchema);
