exports.calculator = function(req, res){
    let result = null;
    let num1;
    let num2;
    try {
        num1 = parseInt(req.params.num1);
        num2 = parseInt(req.params.num2);
    } catch (err) {
    }

    if (!isNaN(num1) || !isNaN(num2)) {
        switch (req.params.logic) {
            case "+":
                result = num1 + num2;
                break;
                
                case "-":
                    result = num1 - num2;
                    break;
                    
                default:
                    res.json({
                        "Error": "Invalid operand",
                    });
                    return;
        }
        res.json({
            "Result": result,
        });
    } else {
        res.json({
            "Error": "Not a number",
        });
    }
}