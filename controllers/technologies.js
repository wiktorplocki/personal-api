const Technology = require("../models/technologies");

async function findAll(ctx) {
  const technologies = await Technology.find({});
  ctx.body = technologies;
}

async function find(ctx) {
  const id = ctx.params.id;
  const technology = await Technology.findById(id);
  ctx.body = technology;
}

async function create(ctx) {
  const newTech = new Technology(ctx.request.body);
  const savedTech = await newTech.save();
  ctx.body = savedTech;
}

async function destroy(ctx) {
  const id = ctx.params.id;
  const technology = await Technology.findById(id);
  const deletedTech = await technology.remove();
  ctx.body = deletedTech;
}

module.exports = { findAll, find, create, destroy };
