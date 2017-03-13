var express = require('express'),
    app = express(),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    config = require('./config/config.js')

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

var env = process.env.NODE_ENV || 'development';

app.use(session({ secret: config.sessionSecret, saveUninitialized: true, resave: true }));

require('./routes/routes.js')(express, app);
app.listen(process.env.PORT || 5000, function() {
    console.log('CHAT APP working on port ', process.env.PORT || 5000);
    console.log('ENV: ' + env);
})