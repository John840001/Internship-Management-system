const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  name: { type: String, required: true },
  achievement: [{ type: String }],
  year: { type: String, required: true },
  level: { type: String },
  rollNumber: { type: Number, required: true },
});

const Achievement = mongoose.model("achievement", achievementSchema);

module.exports = { Achievement };
