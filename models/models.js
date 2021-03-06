const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SAICSchema = new Schema({
  courseTitle: {
    type: String,
    required: true
  },
  courseNumber: {
    type: Number,
    default: ''
  },
  roomNumber: {
    type: Number,
    default: ''
  },
  instructor: {
    type: String,
    default: ''
  },
  date: {
    type: String
  },
  time: {
    type: String
  }
});

const SAICdb = mongoose.model('SAICSchedule', SAICSchema);

module.exports = SAICdb;
