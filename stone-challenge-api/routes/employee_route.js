const router = require("express").Router();
let Employee = require("../models/employee.model");

router.route("/").get((req, res) => {
  Employee.find()
    .then((employee) => res.json(employee))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {

const employee_name = req.body.employee_name;
const age = Number(req.body.age);
const role = req.body.role;
const newEmployee = new Employee({employee_name, age, role});


newEmployee.save()
.then(() => res.json("Stone Employee Added!"))
.catch(err => res.status(400).json('Error: ' + err))

});

module.exports = router;