var express = require('express');
const path =require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8089;
const keys = require('./config/keys')
var flash = require('connect-flash');

var  app = express();

var cookieSession = require('cookie-session');
var  passport = require('./config/passport-setup');

const routes = require('./routes');
const cookieParser = require('cookie-parser');
var session = require('express-session');

mongoose.connect(keys.mongodb.dbURI,{
  useNewUrlParser : true
});
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(flash());

app.use('/public',express.static(path.join(__dirname,'./public')));
app.use(express.static(path.join(__dirname,'./public')));

app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [keys.session.cookieKey]
  })
);

//required for passport
app.use(session({
  secret : 'afdldkfalkfdk',
  saveUninitialized : false,
  resave : false
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('dev'));
app.use(cookieParser(keys.session.cookieKey));

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(routes);

app.listen(port,()=>{
  console.log(`magice happens on port ${port}`);
});

module.exports = app;