const router = require("express").Router();
const { request, response } = require("express");
const Workout = require("../models/workout");

router.exports = (app) => {
  app.get("/api/workouts", (request, response) => {
    Workout.find()
      .sort({ _id: 1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.post("/api/workouts", (request, response) => {
    Workout.create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.put("/api/workouts/:id", (requrest, response) => {
    Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    ).then(() => {
      Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { totalDuration: req.body.duration } }
      )
        .then((updatedWorkout) => {
          res.json(updatedWorkout);
        })
        .catch((err) => {
          res.json(err);
        });
    });
  });

  router.get("/api/workouts/range", (request, resquest) => {
    Workout.find()
      .sort({ _id: 1 })
      .then((data) => {
        if (data.length > 7) {
          res.json(data.splice(8));
        } else {
          res.json(data);
        }
      })
      .catch((err) => {
        res.json(err);
      });
  });
};

// router.get("/api/workouts", (request, response) => {
//   Workout.find({})
//     .then((dbWorkout) => {
//       response.json(dbWorkout);
//     })
//     .catch((err) => {
//       response.status(400).json(err);
//     });
// });

// router.get("/api/exercise", (request, response) => {
//   Workout.find({})
//     .then((dbWorkout) => {
//       response.json(dbWorkout);
//     })
//     .catch((err) => {
//       response.status(400).json(err);
//     });
// });

// router.get("/api/index", (request, response) => {
//   Workout.find({})
//     .then((dbWorkout) => {
//       response.json(dbWorkout);
//     })
//     .catch((err) => {
//       response.status(400).json(err);
//     });
// });
