'use strict';
const uuid = require('uuid-random');

const express = require('express');
const app = express();
// const ua = require('./userAccount');

app.use(express.static('client'));

//get users from the database ua
function getUsers(req, res) {
  console.log("get users");
  // res.json(await ua.listUsers());
}

//add new user account in database ua and return the new user
function postUser(req, res) {
  console.log("post users");
  const users = addUser(req.body);
  res.json(users);
  // const user = await ua.addUser(req.body.user);
  // res.json(user);
}

function addUser(user) {
  const newUser = {
    id: uuid(),
    user,
  };
  users = [users, ...users.slice(0, 9)];
  return users;
}

// wrap async function for express.js error handling
// function asyncWrap(f) {
//   return (req, res, next) => {
//     Promise.resolve(f(req, res, next))
//       .catch((e) => next(e || new Error()));
//   };
// }

app.get('/users', getUsers);
app.post('/users', express.json(), postUser);

app.listen(8080);
