const mongoose = require("mongoose");
const CategorySchemaDef = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    parent_id: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    show_in_home: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    autoCreate: true,
  }
);

const CategoryModel = mongoose.model("Category", CategorySchemaDef);

module.exports = CategoryModel;
