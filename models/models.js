const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SAICSchema = new Schema({
  courseTitle: {
    type: String,
    required: true
  },
  courseNumber: {
    type: Number
  },
  roomNumber: {
    type: Number
  },
  instructor: {
    type: String
  },
  date: {
    type: String
  }
});

const SAICdb = mongoose.model('SAICSchedule', SAICSchema);

module.exports = SAICdb;
