const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = Schema({
  username: String,
  password: String,
  email: String,
  favorites: Array,
  role: {type:String, enum : ['OWNER', 'USER', 'GUEST'], default: 'GUEST'}
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

//CREATE FOR EXPORT
const User = mongoose.model("User", userSchema);

module.exports = User;