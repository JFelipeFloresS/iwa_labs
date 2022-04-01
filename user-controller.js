const User = require('./models/user');

exports.createUser = function(req, res) {
    let newUser = new User(req.body);
    newUser.save(function(err, user) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(user);
    });
};

exports.getUsers = function(req, res) {
    User.find({}, function(err, users) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(users);
    });
};

exports.getUser = function(req,res) {
    User.find({"email": req.param.email}, function(err, user) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(user);
    });
};
