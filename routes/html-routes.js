const Path = require("path");

//Routes export
module.exports = (app) => {
  //Get for index.html on open
  app.get("/", (req, res) => {
    res.sendFile(Path.join(__dirname, "../public/index.html"));
  });

  //Get for exercise.html
  app.get("/exercise", (req, res) => {
    res.sendFile(Path.join(__dirname, "../public/exercise.html"));
  });

  //Get for stats.html
  app.get("/stats", (req, res) => {
    res.sendFile(Path.join(__dirname, "../public/stats.html"));
  });
};
