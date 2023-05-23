const mongoose = require("mongoose");

const InsuranceSchemaDef = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["full", "half"],
      default: "full",
    },
    startDate: {
      type: Date,
      required: true,
    },
    expiringDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    autoCreate: true,
  }
);

const InsuranceModel = mongoose.model("Insurance", InsuranceSchemaDef);

module.exports = InsuranceModel;
