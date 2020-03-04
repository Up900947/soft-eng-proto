'use strict';
const uuid = require('uuid-random');
const express = require('express');
const app = express();

app.use(express.static('client', { extensions: ['html'] }));

//dummy accounts
let users = [
  { id: 'xnshfdsafasd', username: 'up123456', email: 'up123456@myport.ac.uk', password: '123', course: 'Data Science and Analytics' },
  { id: 'dskjdshkjhsd', username: 'up111111', email: 'up111111@myport.ac.uk', password: '111', course: 'Mechanical Engineering' },
  { id: 'vcxbxcvfggzv', username: 'up121212', email: 'up121212@myport.ac.uk', password: '1212', course: 'Computer Science' },
];

//send the users list
function getUsers(req, res) {
  res.json(users);
}

//add new user account in the server lists
async function postUser(req, res) {
  const users = addUser(req.body);
  res.json(users);
}

function addUser(user) {
  const newUser = {
    id: uuid(),
    user,
  };
  users = [newUser, ...users.slice(0, 9)];
  return users;
}

//wrap async function for express.js error handling
// function asyncWrap(f) {
//   return (req, res, next) => {
//     Promise.resolve(f(req, res, next))
//       .catch((e) => next(e || new Error()));
//   };
// }

app.get('/users', getUsers);
app.post('/users', express.json(), postUser);

app.listen(8080);
