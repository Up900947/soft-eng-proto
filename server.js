'use strict';
const express = require('express');
const app = express();
const ua = require('./userAccount');

app.use(express.static('client'));

//get users from the database ua
async function getUsers(req, res) {
  res.json(await ua.listUsers());
}

//add new user account in database ua and return the new user
async function postUser(req, res) {
  const user = await ua.addUser(req.body.user);
  res.json(user);
}

// wrap async function for express.js error handling
function asyncWrap(f) {
  return (req, res, next) => {
    Promise.resolve(f(req, res, next))
      .catch((e) => next(e || new Error()));
  };
}

app.get('/users', asyncWrap(getUsers));
app.post('/users', express.json(), asyncWrap(postUser));

app.listen(8080);
