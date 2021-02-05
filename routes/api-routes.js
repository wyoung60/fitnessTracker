//DB variable
const db = require("../models");

//Route exports
module.exports = (app) => {
  //Gets all data from workout db
  app.get("/api/workouts", (req, res) => {
    //Aggregate method creates totalDuration key on object
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

  //Call to update db with id parameter
  app.put("/api/workouts/:id", (req, res) => {
    //Calls specific if number and pushes new exercise
    db.Workout.updateOne(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    ).then((data) => {
      res.json(data);
    });
  });

  //Post to create new exercise
  app.post("/api/workouts", (req, res) => {
    //Creates new workout document in workouts collections
    db.Workout.create({}).then((data) => {
      res.json(data);
    });
  });

  //Same as get above.  Used for table/graphs.
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
