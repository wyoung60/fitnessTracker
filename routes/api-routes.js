//DB variable
const db = require("../models");

//Route exports
module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ])
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    ).then((data) => {
      res.json(data);
    });
  });

  app.post("/api/workouts", (req, res) => {
    console.log(req.body);
    db.Workout.create(req.body).then((data) => {
      res.json(data);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ])
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
