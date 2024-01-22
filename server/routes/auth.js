const router = require("express").Router();
const { User, userSchema } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
	const passwordComplexity = require("joi-password-complexity");

// Use connect method to connect to the server
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  console.log("Object Created");
  // db.once('open', () => {
  console.log("Connected to MongoDB");

  // Specify the collection
  const collection = db.collection('users');


router.post("/", async (req, res) => {
	console.log(req.body);
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		// const user = await User.findOne({ email: req.body.email });
		var user;
		collection.findOne({ email: req.body.email },async function  (err, document) {
			if (err) {
			  console.error('Error finding document:', err);
			  return;
			}
			// console.log(user);
			// db.close();
			console.log(document);
			user=document;
		
		console.log("This is User");
		console.log(user);
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		// const validPassword = await bcrypt.compare(
		// 	req.body.password,
		// 	user.password
		// );
		var validPassword;
		if(req.body.password===user.password){
			validPassword=true;
		}
		else{
			validPassword=false;
		}
		console.log(req.body.password)
		console.log(validPassword);
		if (!validPassword)
		return res.status(401).send({ message: "Invalid Email or Password" });
		// userSchema.methods.generateAuthToken = function () {
		// 	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		// 		expiresIn: "7d",
		// 	});
		// 	return token;
		// };
		const token  = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
			expiresIn: "7d",
		});

		console.log(`User Id ${user._id}`);
		res.status(200).send({ data: token, message: "Logged in successfully",userId:user._id });
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;