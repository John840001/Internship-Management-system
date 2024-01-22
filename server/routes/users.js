const router = require("express").Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { User } = require("../models/user");
//Schema Things
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { Result } = require("postcss");
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connection Done");
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  console.log("Object Created");
  // db.once('open', () => {
  console.log("Connected to MongoDB");

//User Schema
// *
// const userSchema = new mongoose.Schema({
// 	firstname: { type: String, required: true },
// 	lastname: { type: String, required: true },
// 	classy:	{ type: String, required: true },
// 	year: { type: String, required: true },
// 	email: { type: String, required: true },
// 	contact: { type: String, required: true},
// 	password: { type: String, required: true },
// });

// userSchema.methods.generateAuthToken = function () {
// 	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
// 		expiresIn: "7d",
// 	});
// 	return token;
// };

// const User = mongoose.model("users", userSchema);
// *
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
router.post("/adduser", async (req, res) => {
  console.log("Data Received in Backend");
//   const EditPersonal = require("../models/user");
console.log(req.body);
  
  const newuser = new User(req.body);
  newuser.save((err, user) => {
    if (err) return console.error(err);
    console.log("User saved:", user);
	res.status(200).send({ message: 'User saved successfully', userId: user._id });

    // });

    // console.log(req);
  });
});
// Internship Schema

const internshipSchema = new mongoose.Schema({
	id: { type: String, required: true },
	name: { type: String, required: true },
	company: { type: String, required: true },
	role: { type: String, required: true},
	duration: { type: String, required: true },
	rollNumber: { type: Number, required: true },
  });
  const Internship = mongoose.model("internship", internshipSchema);

  router.post("/api_internship", async (req, res) => {
	console.log("Data Received in Backend");
  //   const EditPersonal = require("../models/user");
	console.log(req.body);
	const newinternship = new Internship(req.body);
	newinternship.save((err, user) => {
	  if (err) return console.error(err);
	  console.log("Internship Added:", user);
	  // });
  
	  // console.log(req);
	});
  });
  // Achievemnt Schema
  const achievementSchema = new mongoose.Schema({
	  id: { type: String, required: true },
	  name: { type: String, required: true },
	  rollNumber: { type: Number, required: true },
	  achievement: { type: String,},
	  year: { type: String, required: true },
	  level: { type: String},
	});
	const Achievement = mongoose.model("achievement", achievementSchema);

	router.post("/api_achievemnt", async (req, res) => {
		console.log("Data Received in Backend");
	  //   const EditPersonal = require("../models/user");
		
		const achievement = new Achievement(req.body);
		achievement.save((err, user) => {
		  if (err) return console.error(err);
		  console.log("Achievemnt Added:", user);
		  // });
	  
		  // console.log(req);
		});
	  });

	// Certificate Schema
	const certificateSchema = new mongoose.Schema({
		id: { type: String, required: true },
		name: { type: String, required: true },
		certificatename: { type: String, required: true },
		certificateLink: [{ type: String }],
		rollNumber: { type: Number, required: true },
	  });
	  
	  const Certificate = mongoose.model("certificate", certificateSchema);
	  router.post("/api_certificate", async (req, res) => {
		console.log("Data Received in Backend");
	  //   const EditPersonal = require("../models/user");
		
		const certificate = new Certificate(req.body);
		certificate.save((err, user) => {
		  if (err) return console.error(err);
		//   console.log("Certificate Added:", user);
		  // });
	  
		  // console.log(req);
		});
	  });

	  //Publication Schema
	  const publicationSchema = new mongoose.Schema({
		id: { type: String, required: true },		
		name: { type: String, required: true },
		rollNumber: { type: Number, required: true },
		paperLink: [{ type: String }],
	  });
	  
	  const Publication = mongoose.model("publication", publicationSchema);
	  router.post("/api_publication", async (req, res) => {
		console.log("Data Received in Publication");
	  //   const EditPersonal = require("../models/user");
		
		const publication = new Publication(req.body);
		console.log(publication);
		publication.save((err, user) => {
		  if (err) return console.error(err);
		  console.log("Publication saved:", user);
		  // });
		  // console.log(req);
		});
	  });
	  //Result Schema
	  const resultSchema = new mongoose.Schema({
		id: { type: String, required: true },
		name: { type: String, required: true },
		rollNumber: { type: Number, required: true },
		sem1: { type: Number },
		sem2: { type: Number },
		sem3: { type: Number },
		sem4: { type: Number },
		sem5: { type: Number },
		sem6: { type: Number },
		sem7: { type: Number },
		sem8: { type: Number },
		cgpa: { type: Number },
	  });
	  const Results = mongoose.model("result", resultSchema);


	  //Get Data Api endpoint
	  
	  router.post("/api_getdata", async (req, res) => {
		console.log("Getting Data");
	  //   const EditPersonal = require("../models/user");
		const id=req.body.id;
		console.log(req.body.id);
		// console.log(res);
	  const user = await User.findOne({ _id:id });
	//   console.log(user);
	  a={
		firstname:user.firstname,
		lastname:user.lastname,
		classy:user.classy,
		year:user.year,
		email:user.email,
		contact:user.contact,
		password:user.password
	  }
	//   var b={};
	  var internt=[{
		company:"",
		role:"",
		duration:""
	  }];
	  const result = await Internship.findOne({ id: id }).select("id").lean();
	if (result) {
		internt = await Internship.find({ id:id }).exec();
		// console.log(internt);
		//   b={
		// 	company:intern.company,
		// 	role:intern.role,
		// 	duration:intern.duration
		//   };
	}
	achieve=[{
	  name:" ",
	  year:" ",
	  level:" "
	}];
	const result2 = await Achievement.findOne({ id: id }).select("id").lean();
	if (result2) {
		achieve =  await Achievement.find({ id:id }).exec();
		// c={
		// 	name:achieve.name,
		// 	year:achieve.year,
		// 	level:achieve.level
		//   };
	}
	var publication=[{
		name:" ",
		paperLink:" ",
		rollNumber:" "
	  }];
	  const result3 = await Publication.findOne({ id: id }).select("id").lean();
	  if (result3) {
		  publication =  await Publication.find({ id:id }).exec();
	  }
	var certificate=[{
	name:" ",
	certificateLink:" ",
	rollNumber:" "
	}];
	const result4 = await Certificate.findOne({ id: id }).select("id").lean();
	if (result4) {
		certificate =  await Certificate.find({ id:id }).exec();
	}
	  const data = a;
	  res.status(200).send({ message: 'User saved successfully', data: data ,intern:internt,achieve:achieve,publication:publication,certificate:certificate});
	  });
  

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
