/* eslint-disable no-multiple-empty-lines */
require('@babel/register');
require('dotenv').config();
const express = require('express');

const app = express();
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

// routes
const indexRoute = require('./routes/index.routes');
const authRoute = require('./routes/auth.routes');
const farmRoute = require('./routes/farm.routes');
// const userRoute = require('./routes/user.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.resolve('public')));

const sessionConfig = {
  name: 'exam',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new FileStore({}),
  cookie: { httpOnly: true },
};
process.on('uncaughtException', (err) => {
  console.error(err);
  console.log('Node NOT Exiting...');
});

//  CORS. так лучше [*] не делать, на самом деле
app.use((req, res, next) => {
  const whiteList = ['*'];
  const origin = req.get('origin');
  if (whiteList.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Headers', ['Content-Type']);
    res.setHeader('Access-Control-Allow-Methods', ['GET', 'POST', 'PUT']);
    res.setHeader('Access-Control-Allow-Credentials', true);
  }
  next();
});

app.use(session(sessionConfig));



app.use('/', indexRoute);
app.use('/auth', authRoute);
app.use('/farm', farmRoute);
app.use('*', (req, res, next) => { res.send('404 Nothing found :('); });

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => { console.log('Server is up', PORT); });
