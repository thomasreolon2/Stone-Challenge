const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema(
  {
    employee_name: { type: String, required: true },
    activity_desc: { type: String, required: true },
    weight: { type: Number, required: true },
    date: { type: Date, required: true },
    age: { type: Number, required: true },
    role: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
