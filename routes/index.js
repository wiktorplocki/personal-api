module.exports = router => {
  router.prefix("/v1");
  router.use("/users", require("./users"));
  router.use("/projects", require("./projects"));
  router.use("/technologies", require("./technologies"));
  router.use("/blogs", require("./blogs"));
};
