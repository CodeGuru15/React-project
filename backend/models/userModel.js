const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  contact: { type: Number },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
// create a collection named "User data" in MongoDB
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
