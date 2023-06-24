const mongoose = require("mongoose");

const UserSchemaDef = new Schema({
  username: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "customer", "viewer"],
    default: "viewer",
  },
});

const UserModel = mongoose.model("User", UserSchemaDef);

module.exports = UserModel;
