const http = require("http"),
    logger = require("morgan"),
    express = require("express"),
    router  = express.Router(),
    itemCtrl = require("./item-controller"),
    bodyParser = require("body-parser");

let app = express();
let port = 8000;

app.use(bodyParser.json());
app.use(logger("tiny"));

app.get("/:num1/:num2/:logic", itemCtrl.calculator);

app.listen(port, function(err) {
    console.log("Listening on port: " + port);
});