const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  class: { type: String },
  year: { type: String },
  email: { type: String },
  contact: { type: String },
  rollNumber: { type: String },
  password: { type: String },
  role: { type: String },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "1d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().label("First Name"),
    lastName: Joi.string().label("Last Name"),
    class: Joi.string().label("Class"),
    year: Joi.string().label("Year"),
    contact: Joi.string().label("Contact"),
    email: Joi.string().email().label("Email"),
    rollNumber: Joi.string().label("Roll Number"),
    password: Joi.string().label("Password"),
    role: Joi.string().label("Role"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
