const Project = require("../models/projects");

async function findAll(ctx) {
  const projects = await Project.find({});
  ctx.body = projects;
}

async function find(ctx) {
  const id = ctx.params.id;
  const project = await Project.findById(id);
  ctx.body = project;
}

async function create(ctx) {
  const newProject = new Project(ctx.request.body);
  const savedProject = await newProject.save();
  ctx.body = savedProject;
}

async function destroy(ctx) {
  const id = ctx.params.id;
  const project = await Project.findById(id);
  const deletedProject = await project.remove;
  ctx.body = deletedProject;
}

async function update(ctx) {
  const id = ctx.params.id;
  const project = await Project.findById(id);
  project.done = !project.done;
  const updatedProject = await project.save();
  ctx.body = updatedProject;
}

module.exports = { findAll, find, create, destroy, update };
