//Dependency
const mongoose = require("mongoose");

//Schema for workout
const WorkoutSchema = new mongoose.Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

//Create mongoose model
const Workout = mongoose.model("Workout", WorkoutSchema);

//Exports model
module.exports = Workout;
