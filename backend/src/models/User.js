const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  uuid:{
    type: String,
    required: false
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);