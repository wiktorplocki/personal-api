const Blog = require("../models/blogs");

async function findAll(ctx) {
  const blogs = await Blog.find({});
  ctx.body = blogs;
}

async function find(ctx) {
  const id = ctx.params.id;
  const blog = await Blog.findById(id);
  ctx.body = blog;
}

async function create(ctx) {
  const newBlog = new Blog(ctx.request.body);
  console.log(ctx);
  const savedBlog = await newBlog.save();
  ctx.body = savedBlog;
}

async function destroy(ctx) {
  const id = ctx.params.id;
  const blog = await Blog.findById(id);
  const deletedBlog = await blog.remove();
  ctx.body = deletedBlog;
}

module.exports = { findAll, find, create, destroy };
