const router = require("express").Router();

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

// router.post('/editt', function (req, res) {
//     // var newBook = {
//     //     "BookID": req.body.BookID,
//     //     "Title": req.body.Title,
//     //     "Author": req.body.Author
//     // }
// 	console.log("Received");

// 	MongoClient.connect(URL, function (err, db) {
// 		if (err) throw err;
// 	db.collection("user").insertOne(req.body, function (err, result) {
//         if (err) throw err;
//         console.log("1 Recorded Inserted");
//         db.close();
//     console.log(req.body);
// 	});
// });

// });
const userSchema = new mongoose.Schema({
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	classy:	{ type: String, required: true },
	year: { type: String, required: true },
	email: { type: String, required: true },
	contact: { type: String, required: true},
	password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("users", userSchema);

// const validate = (data) => {
// 	const schema = Joi.object({
// 		firstName: Joi.string().required().label("First Name"),
// 		lastName: Joi.string().required().label("Last Name"),
// 		class: Joi.string().required().label("Class"),
// 		year: Joi.string().required().label("Year"),
// 		email: Joi.string().email().required().label("Email"),
// 		password: passwordComplexity().required().label("Password"),
// 	});
// 	return schema.validate(data);
// };

module.exports = { User, userSchema };