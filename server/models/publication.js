const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  paperLink: [{ type: String }],
  rollNumber: { type: Number, required: true },
});

const Publication = mongoose.model("publication", publicationSchema);

module.exports = { Publication };
