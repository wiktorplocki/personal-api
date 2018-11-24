const Router = require("koa-router");
const router = new Router();
const Ctrl = require("../controllers/users");

router.post("/", Ctrl.auth);
router.post("/create", Ctrl.create);

module.exports = router.routes();
