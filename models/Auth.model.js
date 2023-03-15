const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: "Role" }],
});

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;
