import mongoose from "mongoose";

const HealthSchemaDef = new mongoose.Schema(
  {
    insurance: {
      type: mongoose.Types.ObjectId,
      ref: "Insurance",
      default: null,
    },
    vaccinesDate: {
      type: Date,
      required: true,
    },
    injury: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    autoCreate: true,
    autoIndex: true,
  }
);
