const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const MongoURI = process.env.MONGO_URI;
mongoose.connect(MongoURI, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once('open', () => { 
    console.log("MongoDB database connection established sucessfully");
})

const employeeActivityRouter = require('./routes/employee_act_route');
const employeeRouter = require('./routes/employee_route')

app.use('/activities', employeeActivityRouter);
app.use('/employees', employeeRouter);

app.listen(port, () => {
  console.log(`Stone Server running on port: ${port}`);
});
