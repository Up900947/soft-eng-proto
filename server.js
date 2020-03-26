'use strict';
const uuid = require('uuid-random');
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const util = require('util');
const path = require('path');

const app = express();

const uploader = multer({
  dest: 'upload',
  limits: {
    fields: 10,
    files: 1,
  },
});

fs.renameAsync = fs.renameAsync || util.promisify(fs.rename);

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

//gets the file from the request and store it to server
async function uploadFile(req, res) {
  const file = req.file;
  const filename = req.body.filename;
  const courseID = req.body.course;
  const moduleID = req.body.module;

  let newFilename;
  //move file to the appropriate folder in client side
  if (file) {
    const fileExt = file.mimetype.split('/')[1] || 'pdf';
    newFilename = (filename || file.filename) + '.' + fileExt;
    await fs.renameAsync(file.path, path.join('client', courseID, moduleID, newFilename));
  }
  res.json(newFilename);
}

//get all files from the client side courses folder lecture notes folder
async function getFiles(req, res) {
  const courseID = req.params.id.split(',')[0];
  const moduleID = req.params.id.split(',')[1];

  const directoryPath = path.join('client', courseID, moduleID);

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      files = ['Unable to scan directory' + err];
    }
    res.json(files);
  });
}

//wrapper for error catching
function asyncWrap(f) {
  return (req, res, next) => {
    Promise.resolve(f(req, res, next))
      .catch((e) => next(e || new Error()));
  };
}
// set up view engineering
app.set('view engine','ejs');
//creater home route
app.get('/',(req,res)=> {
  res.render('index');
});

app.get('/api/users', getUsers);
app.post('/api/users', express.json(), postUser);
app.post('/api/files', uploader.single('file'), express.json(), asyncWrap(uploadFile));
app.get('/api/files:id', asyncWrap(getFiles));

app.listen(8080);
