const express = require('express');
const routes = require('./router/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.set("port", process.env.PORT || 3001);

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

// Mongoose Connections
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/saicdb',{
  useMongoClient: true
});

app.use(express.static('./client/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

// Error Handling middleware
app.use(function(err, req, res, next){
  console.log('ERROR IS FOUND!');
});

app.listen(app.get("port"), () => {
  console.log(`Your SERVER is now running on port ${app.get("port")}. Press CTRL + C to terminate the SERVER`);
});
