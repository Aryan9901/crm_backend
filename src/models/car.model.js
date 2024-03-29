const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema(
	{
		registrationNo: {
			type: String,
			required: true,
		},
		model: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		features: {
			capacity: {
				type: Number,
				min: 1,
			},
			type: {
				type: String,
				enum: ["AC", "NON-AC"],
			},
			maxSpeed: {
				type: Number,
			},
		},
		rate: {
			day: {
				type: Number,
				min: 0,
			},
			km: {
				type: Number,
				min: 0,
			},
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: "Owner", // Reference to the Owner model
		},
	},
	{ timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
