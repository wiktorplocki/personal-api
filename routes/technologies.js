const Router = require("koa-router");
const router = new Router();
const Ctrl = require("../controllers/technologies");

router.get("/", Ctrl.findAll);
router.get("/:id", Ctrl.find);
router.post("/", Ctrl.create);
router.del("/:id", Ctrl.destroy);

module.exports = router.routes();
