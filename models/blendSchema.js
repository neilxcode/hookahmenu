const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

// mongoose.connect('mongodb://localhost/hookahmenu', {useMongoClient: true})

const blendSchema = Schema({
  names: String,
  description: String,
  brand: String,
  strength: Number,
  likes: Number,
  username: Schema.Types.ObjectId,
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

//CREATE FOR EXPORT
const Blend = mongoose.model("Blend", blendSchema);

module.exports = Blend;