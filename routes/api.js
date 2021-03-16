const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (request, response) => {
  Workout.find({})
    .then((dbWorkout) => {
      response.json(dbWorkout);
    })
    .catch((err) => {
      response.status(400).json(err);
    });
});
