const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    const uri = process.env.DB;
    mongoose.connect(uri, connectionParams);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.log("Could not connect database!");
  }
};
