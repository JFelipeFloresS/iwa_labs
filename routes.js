const express = require("express"),
    router = express.Router(),
    itemCtrl = require("./item-controller");

router.get("/", itemCtrl.helloWorld);
router.get("/:name", itemCtrl.replyName);
router.get("/:num1/:num2", itemCtrl.randomCalculator);
router.get("/:num1/:num2/:logic", itemCtrl.calculator);

module.exports = router;