'use strict';
const uuid = require('uuid-random');
const express = require('express');
const upload = require('express-fileupload');

const app = express();

app.use(upload());
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

function uploadFile (req,res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let file = req.files.file;

  file.mv(__dirname + '/upload/', function(err) {
    if (err) {
      return res.status(500).send(err);
    }
   res.send('File uploaded');
 });
}

// app.post("/upload", function(req,res) {
//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send('No files were uploaded.');
//   }
//
//   let file = req.files.file;
//
//   file.mv(__dirname + '/upload/sample.txt', function(err) {
//     if (err) {
//       return res.status(500).send(err);
//     }
//    res.send('File uploaded');
//  });
// });

app.get('/users', getUsers);
app.post('/users', express.json(), postUser);
app.post('/upload', uploadFile);

app.listen(8080);
