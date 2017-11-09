const express = require('express');
const routes = require('./router/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Mongoose Connections
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/saicdb',{
  useMongoClient: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/saic', routes);

app.listen(PORT, () => {
  console.log(`Your SERVER is now running on port ${PORT}. Press CTRL + C to terminate the SERVER`);
});
