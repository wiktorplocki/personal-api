const User = require("../models/users");

async function find(ctx) {
  const id = ctx.params.id;
  const user = await User.findById(id);
  ctx.body = user;
}

async function create(ctx) {
  const newUser = new User(ctx.request.body);
  const savedUser = await newUser.save();
  ctx.body = savedUser;
}

async function auth(ctx) {
  const user = await User.findOne({ username: ctx.request.body.username });
  if (user) {
    const comparePassword = await user.verifyPassword(
      ctx.request.body.password
    );
    if (comparePassword) {
      ctx.status = 200;
      ctx.body = comparePassword;
    } else {
      ctx.throw(401, "Password does not match");
    }
  } else {
    ctx.throw(401, "Username does not match");
  }
}

module.exports = { find, create, auth };
