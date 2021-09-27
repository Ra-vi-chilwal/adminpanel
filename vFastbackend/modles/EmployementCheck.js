const mongoose = require("mongoose");

const EmployementCheckSchema = mongoose.Schema({
	nameofemp: {
		type: String,
		required: true,
	},
	contactdetail: {
		type: String,
		required: true,
	},
	
	contact: {
		type: String,
		required: true,
	},
	offerexp: {
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
module.exports = mongoose.model("EmployementChecks", EmployementCheckSchema);
