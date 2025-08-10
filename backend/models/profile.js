const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
  firstname: String,
  lastname: String,
  address: String,
  phone: Number,
  dob: Date,
  education: String,
  institute: String,
  experience: String,
  designation: String,
  company: String,
});

module.exports = mongoose.model("profile", profileSchema);
