'use strict';
const el = {};

//get the user list from the server
async function loadUsers() {
   const response = await fetch('api/users');
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
  const found = false;

  for (const user of users) {
    if (user.username === username) {
      console.log(user.username);
      checkPassword(user);
      found = true;
    }
  }

  if (!found) {
    //shows when user is not in the list
    console.log('User is not registered');
    confirm("User is not registered");
  }
}

//check if the password is correct
function checkPassword(user) {
    const password = el.psw.value;

    if (user.password === password) {
      //redirect to homepage
      window.location.href = '/courses.html';
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
  el.login.addEventListener('click', loadUsers);
}

function pageLoaded() {
  prepareHandles();
  addEventListeners();
}

window.addEventListener('load', pageLoaded);
