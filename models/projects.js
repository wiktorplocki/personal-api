const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  stack: [{ technology: String }]
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = mongoose.model("Project");
