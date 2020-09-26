const express = require('express');
// const morgan = require('morgan');
const Msg = require('./messageModel');

// 1) Middlewares
//express is a fn here so calling it will add a bunch of methods to app
const app = express();

//adds body to requests i.e req.body
app.use(express.json());
 
// app.use(morgan('dev'));


app.use((req, res, next) => {
  console.log(' hello from middleware ');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.requestTime);
  next();
});

app.post('/',(req,res) => {
  const data = Msg.create(req.body);
  res.status(200).json({
    data
  })
})

//Handling unhandled routes
app.all('*', (req, res, next) => {
  // const err = new Error(`can't find ${req.originalUrl} on the server`);
  // err.status = 'fail';
  // err.statusCode = 404;
  next(new AppError(`can't find ${req.originalUrl} on the server`));
});


module.exports = app;
