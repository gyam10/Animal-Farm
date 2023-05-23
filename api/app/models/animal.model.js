const mongoose = require("mongoose");
const AnimalSchemaDef = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tag_no: {
      type: Number,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    breed: {
      type: mongoose.Types.ObjectId,
      ref: "Breed",
      default: null,
    },
    weight: {
      type: Number,
      required: true,
    },
    sex: {
      type: String,
      enum: ["male", "female"],
      default: "male",
    },
    age: {
      type: Number,
      required: true,
    },
    pregnency: {
      type: Boolean,
      default: false,
    },
    entry_data: {
      type: Date,
      required: true,
    },
    color: String,
    parent_tag_no: {
      type: mongoose.Types.ObjectId,
      ref: "Animal",
      default: null,
    },
    offspring_tag_no: {
      type: mongoose.Types.ObjectId,
      ref: "Animal",
      default: null,
    },
    health: {
      type: mongoose.Types.ObjectId,
      ref: "Health",
    },
    for_sale: {
      type: Boolean,
      default: false,
    },
    price: Number,
  },
  {
    timestamps: true,
    autoIndex: true,
    autoCreate: true,
  }
);

const AnimalModel = mongoose.model("Animal", AnimalSchemaDef);
module.exports = AnimalModel;
