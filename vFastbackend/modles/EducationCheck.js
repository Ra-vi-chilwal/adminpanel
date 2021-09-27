const mongoose = require("mongoose");

const EducationCheckSchema = mongoose.Schema({
	board: {
		type: String,
		required: true,
	},
	yearIn: {
		type:Number,
		required: true,
	},
	
	yearpass: {
		type: Number,
		required: true,
	},
	remark: {
		type: String,
		required: true,
	},
	
	image: {
		type: String,
		required: true,
    },
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("EducationChecks", EducationCheckSchema);
