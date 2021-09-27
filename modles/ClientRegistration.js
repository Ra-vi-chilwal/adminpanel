const mongoose = require("mongoose");

const ClientRegistrationSchema = mongoose.Schema({
	// name: {
	// 	type: String,
	// 	required: true,
	// },
	// Fname: {
	// 	type: String,
	// 	required: true,
	// },
	image:{
		type:String,
		required:true,
	},
	// productimage:{
	// 	type:String,
	// 	required:true,
	// },
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("ClientRegistrations", ClientRegistrationSchema);
