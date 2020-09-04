require('dotenv').config();

const express = require('express');
const morgan = require("morgan");
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// DataBase SetUp
mongoose.connect(
  process.env.MONGO_URL,
  // 'mongodb+srv://oyyo:oyyoSumantra@cluster0-micro.cdk16.mongodb.net/<dbname>?retryWrites=true&w=majority',
// 'mongobd://localhost:27017/upload',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> console.log('mongodb connected'))
.catch( err => console.log(err))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);

app.use(require('./routes'));

app.listen(3000);
