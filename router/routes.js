const express = require('express');
const router = express.Router();
const SAICdb = require('../models/models');

router.get('/course', (req, res) => {
  SAICdb.find({}, (err, course) => {
    res.json(course);
  });
});

router.post('/course', (req, res) => {
  SAICdb.create(req.body).then(function(schedule){
    res.send(schedule);
    console.log("The data has been entered into the database");
  });
  res.end();
});

router.put('/course/:id', (req, res) => {
  res.send(`Your SERVER is now running on port 3000.`)
});

router.delete('/course/:id', (req, res) => {
  res.send(`Your SERVER is now running on port 3000.`)
});



/*
const router = (app) => {
  app.route('/').get((req, res) => {
    res.send(`Your SERVER is now running on port 3000.`)
  })
}
*/

module.exports = router;
