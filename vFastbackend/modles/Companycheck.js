const mongoose = require("mongoose");

const CompanycheckSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	Fcompanydetail: {
		type: String,
		required: true,
	},
    Scompanydetail: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
    durationoffirstcompany: {
		type: String,
		required: true,
	},
    durationofsecondcompany: {
		type: String,
		required: true,
	},
    resonofgap: {
		type: String,
		required: true,
	},
    contactdetails: {
		type: String,
		required: true,
	},
    city: {
		type: String,
		required: true,
	},
      date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Companychecks", CompanycheckSchema);
