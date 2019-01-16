const express = require('express');
const path =require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

const app = express();

const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/userdata',{
  useNewUrlParser : true
});
app.use('/public',express.static(path.join(__dirname,'./public')));
app.use(express.static(path.join(__dirname,'./public')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(routes);

app.listen(port,()=>{
  console.log(`listening on port ${port}`);
});

module.exports = app;