const express = require('express');
const path =require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8089;
const keys = require('./config/keys')
const app = express();
const cookieSession = require('cookie-session');
const passport = require('passport');
const routes = require('./routes');
const cookieParser = require('cookie-parser');
mongoose.connect(keys.mongodb.dbURI,{
  useNewUrlParser : true
});
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use('/public',express.static(path.join(__dirname,'./public')));
app.use(express.static(path.join(__dirname,'./public')));

app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [keys.session.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('dev'));
app.use(cookieParser(keys.session.cookieKey));

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(routes);

app.listen(port,()=>{
  console.log(`listening on port ${port}`);
});

module.exports = app;