const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  userId:{
    type: String,
    required: false
  },
  name:{
    type: String,
    required: false
  },
  eventHour: {
    type: String,
    required: false,
  },
  eventDay:{
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  tickets: {
    type: Number,
    required: false
  },
  lng: {
    type: Number,
    required: false
  },
  lat: {
    type: Number,
    required: false
  },
  imgUrl: {
    type: String,
    required: false
  },
  nameImg:{
    type: String,
    required: false
  }
  
});

//listField---

module.exports = mongoose.model('Event', eventSchema);