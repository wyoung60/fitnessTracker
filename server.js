//Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Create port
const PORT = process.env.PORT || 8500;

//Instance of express
const app = express();

//Setup to use morgan
app.use(logger("dev"));

//Boilerplate for express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setup up static for express
app.use(express.static("public"));

//Connect to database with mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Setup routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

//Start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
