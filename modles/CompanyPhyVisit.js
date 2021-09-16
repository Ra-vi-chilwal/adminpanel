const mongoose = require("mongoose");

const CompanyPhyVisitSchema = mongoose.Schema({
	meetingpersonname: {
		type: String,
		required: true,
	},
	meetingpersoncontactnumber: {
		type: String,
		required: true,
	},
	mailIDofcompanyorperson: {
		type: String,
		required: true,
	},
	designationofmeetingperson: {
		type: String,
		required: true,
	},

	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("CompanyPhyVisits", CompanyPhyVisitSchema);
