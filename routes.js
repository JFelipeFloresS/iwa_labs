const express = require("express"),
    router = express.Router(),
    itemCtrl = require("./item-controller");

router.get("/:num1/:num2/:logic", itemCtrl.calculator);

module.exports = router;