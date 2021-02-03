const Path = require("path");

//Routes export
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(Path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", (req, res) => {
    res.sendFile(Path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", (req, res) => {
    res.sendFile(Path.join(__dirname, "../public/stats.html"));
  });
};
