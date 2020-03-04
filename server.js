'use strict';
const uuid = require('uuid-random');
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();

const uploader = multer({
  dest: 'upload',
  limits: { // for security
    files: 1
  },
});

app.use(express.static('client', { extensions: ['html'] }));

//dummy accounts
let users = [
  { id: 'xnshfdsafasd', username: 'up123456', email: 'up123456@myport.ac.uk', password: '123', course: 'Data Science and Analytics' },
  { id: 'dskjdshkjhsd', username: 'up111111', email: 'up111111@myport.ac.uk', password: '111', course: 'Mechanical Engineering' },
  { id: 'vcxbxcvfggzv', username: 'up121212', email: 'up121212@myport.ac.uk', password: '1212', course: 'Computer Science' },
];

//send the users list
async function getUsers(req, res) {
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

// function uploadFile(req, res) {
//   if (function(err) {
//       return res.end("Something went wrong!");
//   }
//   return res.end("File uploaded sucessfully!.");
// }

function getFile(req, res) {
  res.sendFile(__dirname + "/files.html");
}

app.get('/users', getUsers);
app.post('/users', express.json(), postUser);
// app.get('/upload', uploadFile);
app.get('/upload', getFile);

app.listen(8080);
