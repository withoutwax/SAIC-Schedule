const express = require('express');
const router = express.Router();
const SAICdb = require('../models/models');

router.get('/course', (req, res, next) => {
  SAICdb.find({}, (err, course) => {
    res.json(course);
  });
});



router.post('/course', (req, res, next) => {

   SAICdb.create(req.body).then(function(schedule){
     return res.send(schedule);
  //   console.log("The data has been entered into the database");
  //   console.log(req.body);
  }).catch(next);
});

/*
router.post('/course', function (req, res) {
    var courseTitle = req.body.courseTitle;
    console.log(courseTitle);
});
*/
router.put('/course/:id', (req, res, next) => {
  res.send(`PUT REQUEST!`)
});

router.delete('/course/:id', (req, res, next) => {
  SAICdb.findByIdAndRemove({_id: req.params.id}, function(err, docs) {
    if(err) res.json(err);
		else    res.redirect('/view');
    console.log("The data has been removed from the database");
  });
});



/*
const router = (app) => {
  app.route('/').get((req, res) => {
    res.send(`Your SERVER is now running on port 3000.`)
  })
}
*/

module.exports = router;
