const mongoose = require("mongoose");

const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true, bcrypt: true }
});

UserSchema.plugin(require("mongoose-bcrypt"), { rounds: SALT_WORK_FACTOR });

module.exports = mongoose.model("User", UserSchema);
