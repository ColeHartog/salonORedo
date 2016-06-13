var User = require("./../models/userModel.js"),
	jwt = require("jsonwebtoken"),
	config = require("./../config.js");

module.exports = {

	Login: function(req, res, next){
		User.findOne({username:req.body.username}).exec(function(err, user){
			if(err) return res.status(500).json(err);
			if(user){
				if(user.comparePassword(req.body.password)){
					var token = jwt.sign({
						_id: user._id
					}, config.key);
					res.status(200).json({
						login: true,
						loginToken: token
					});
				}else{
					res.status(200).json({
						login: false,
						error: "Incorrect Password"
					});
				}
			}else{
				res.status(200).json({
					login: false,
					error: "User Does Not Exist"
				});
			}
		});
	},

	LoggedIn: function(req, res, next){
		if(req.get("loginToken")){
			var token = jwt.verify(req.get("loginFunction"), config.key);
			User.findById(token._id).exec(function(err, user){
				if(err) return res.status(500).json(err);
				if(user) return res.status(200).json({loggedIn:true})
			});
		}
		res.status(200).json({
			loggedIn: false
		});
	},

	RegisterNewLogin: function(req, res, next){
		User.findOne({username: req.body.username}).exec(function(err, user){
			if(err) return res.status(500).json(err);
			if(user){
				res.status(200).json({
					createdUser: false,
					error: "Username Already In Use"
				});
			}else{
				User.create(req.body).exec(function(err, newUser){
					if(err) return res.status(500).json(err);
					if(newUser){
						var token = jwt.sign({
							_id: newUser._id
						}, config.key);
						res.status(200).json({
							registered: true,
							loginToken: token
						});
					}else{
						res.status(200).json({
							registered: true
						});
					}
				});
			}
		});
	}

}
