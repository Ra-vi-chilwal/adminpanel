const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
	packageimage: {
		type: String,
		required: true,
	},
   	
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Images",ImageSchema);
