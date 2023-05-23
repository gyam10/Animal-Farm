const mongoose = require("mongoose");
const BreedSchemaDef = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    autoCreate: true,
    autoIndex: true,
  }
);

const BreedModel = mongoose.model("Breed", BreedSchemaDef);
module.exports = BreedModel;
