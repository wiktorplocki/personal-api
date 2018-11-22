const mongoose = require("mongoose");

const TechnologySchema = new mongoose.Schema({
  label: { type: String, index: true }
});

const Technology = mongoose.model("Technology", TechnologySchema);

module.exports = Technology;
