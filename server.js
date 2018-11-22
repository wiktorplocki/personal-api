const Koa = require("koa");
const Router = require("koa-router");
const Logger = require("koa-logger");
const Cors = require("@koa/cors");
const BodyParser = require("koa-bodyparser");
const Helmet = require("koa-helmet");
const respond = require("koa-respond");
const mongoose = require("mongoose");

const app = new Koa();
const router = new Router();

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}${
    process.env.DB_URL
  }`
);

app.use(Helmet());

if (process.env.NODE_ENV === "development") {
  app.use(Logger());
}

app.use(Cors());
// app.use(
//   BodyParser({
//     enableTypes: ["json"],
//     jsonLimit: "5mb",
//     strict: true,
//     onerror: function(err, ctx) {
//       ctx.throw("body parse error", 422);
//     }
//   })
// );
app.use(
  BodyParser({ onerror: (err, ctx) => ctx.throw("body parse error", 422) })
);

app.use(respond());

// API routes
require("./routes")(router);
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
