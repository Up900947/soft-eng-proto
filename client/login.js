'use strict';
const el = {};

//get the user list from the server
async function loadUsers() {
   const response = await fetch('users');
   let users;
   if (response.ok) {
     users = await response.json();
     checkUser(users);
   } else {
     users = [{ msg: 'failed to load users' }];
   }
}

//check if the user is registered (in the list)
function checkUser(users) {
  const username = el.username.value;

  for (const user of users) {
    if (user.username === username) {
      checkPassword(user);
    } else {
      console.log('User is not registered');
      confirm("User is not registered");
    }
  }
}

//check if the password is correct
function checkPassword(user) {
    const password = el.password.value;

    if (user.password === password) {
      //redirect to homepage
      window.location.href = '/index.html';
    } else {
      console.log('Password incorrect');
      confirm("Password incorrect");
    }
}

//Set up an array of elements found in the DOM
function prepareHandles() {
  el.username = document.querySelector("#username");
  el.psw = document.querySelector("#psw")
  el.login = document.querySelector("#login")
}

//Connect listeners to functions
function addEventListeners() {
  el.login.addEventListener('click', loadUsers());
}

function pageLoaded() {
  prepareHandles();
  addEventListeners();
}

window.addEventListener('load', pageLoaded);
