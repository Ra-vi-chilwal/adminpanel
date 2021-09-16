const mongoose = require("mongoose");

const AddressFieldSchema = mongoose.Schema({
	meetingpersonname: {
		type: String,
		required: true,
	},
	meetingpersonconnumber: {
		type: String,
		required: true,
	},
	idofmeeting: {
		type: String,
		required: true,
	},
	residentialstatus: {
		type: String,
		required: true,
	},
	relationwithcandidate: {
		type: String,
		required: true,
	},
	numberoffamilymember: {
		type: String,
		required: true,
	},

	dateofvarification: {
		type: String,
		required: true,
	},
	remark: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("AddressField", AddressFieldSchema);
