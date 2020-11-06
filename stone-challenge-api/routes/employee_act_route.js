const router = require("express").Router();
let Activity = require("../models/employee_activity.model");

router.route("/").get((req, res) => {
  Activity.find()
    .then((activities) => res.json(activities))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const employee_name = req.body.employee_name;
  const activity_desc = req.body.activity_desc;
  const weight = Number(req.body.weight);
  const date = Date.parse(req.body.date);
  const age = Number(req.body.age);
  const role = req.body.role;

  const newActivity = new Activity({
    employee_name,
    activity_desc,
    weight,
    date,
    age,
    role
  });

  newActivity
    .save()
    .then(() => res.json("Stone Employee Activity Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Activity.findById(req.params.id)
    .then((activity) => res.json(activity))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Activity.findByIdAndDelete(req.params.id)
    .then(() => res.json("Stone Activity deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").put((req, res) => {
  Activity.findById(req.params.id)
    .then((activity) => {
      activity.employee_name = req.body.employee_name;
      activity.activity_desc = req.body.activity_desc;
      activity.weight = Number(req.body.weight);
      activity.age = Number(req.body.age);
      activity.role = req.body.role;
      activity.date = Date.parse(req.body.date);

      activity
        .save()
        .then(() => res.json("Stone Activity Updated Sucessfuly!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
