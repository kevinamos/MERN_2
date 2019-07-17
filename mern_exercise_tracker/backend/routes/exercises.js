router = require("express").Router();
let Exrecise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exrecise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error " + err));
});

//Create
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exrecise({
    username,
    description,
    duration,
    date
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added"))
    .catch(err => res.status(400).json("Error: " + err));
});

//get user by id
router.route("/:id").get((req, res) => {
  Exrecise.findById(req.params.id)
    .then(exr => res.json(exr))
    .catch(err => res.status(400).json("Error: " + err));
});

//Update
router.route("/update/:id").post((req, res) => {
  Exrecise.findByIdAndUpdate(req.params.id)
    .then(exr => {
      exr.username = req.body.username;
      exr.description = req.body.description;
      exr.duration = Number(req.body.duration);
      exr.date = Date.parse(req.body.date);
      exr
        .save()
        .then(() =>
          res.json(`exerrcise with id ${req.params.id} has been updated`)
        )
        .catch(err => res.status(400).json("Error : " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").post((req, res) => {
  Exrecise.findByIdAndDelete(req.params.id)
    .then(exr =>
      res.json(`exerrcise with id ${req.params.id} has been deleted`)
    )
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
