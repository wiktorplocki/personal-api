const mongoose = require("mongoose");
const TechnologySchema = require("./technologies").schema;

const ProjectSchema = new mongoose.Schema({
  idx: { type: Number, index: true },
  title: { type: String },
  description: { type: String },
  stack: [TechnologySchema]
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
