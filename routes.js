const express = require("express"),
    router = express.Router(),
    itemCtrl = require("./item-controller"),
    userCtrl = require('./user-controller');

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:email', userCtrl.getUser);

/*
 router.get("/", itemCtrl.helloWorld);
 router.get("/:name", itemCtrl.replyName);
 router.get("/:num1/:num2", itemCtrl.randomCalculator);
 router.get("/:num1/:num2/:logic", itemCtrl.calculator); 
 */

 module.exports = router;
