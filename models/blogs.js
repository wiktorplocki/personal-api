const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String },
    heading: { type: String },
    body: { type: String }
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
