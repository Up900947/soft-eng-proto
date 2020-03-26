'use strict';
const el = {};





/**
* Retrieves the user list from the server
* @async
* @function
* @since 20/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @param {object[]} el - list of users
* @returns {users}
* @throws else statement msg - 'failed to load users'
*/
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



/**
* check if the user is registered (in the list)
* @function
* @since 20/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @param {string} [users] - users name
* @param {boolean} found
* @returns {users}
* @throws if statement msg - 'User is not registered'
*/
function checkUser(users) {
  const username = el.username.value;
  const found = false;

  for (const user of users) {
    if (user.user.username === username) {
      checkPassword(user);
      found = true;
    }
  }

  if (!found) {
    console.log('User is not registered');
    confirm("User is not registered");
  }
}



/**
* check if the password is correct
* @function
* @since 20/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @param {string} [password] - password from list
* @returns redirect user to homepage
* @throws else statement msg - 'Password incorrect'
*/
function checkPassword(user) {
    const password = el.psw.value;

    if (user.user.password === password) {

      window.location.href = '/courses.html';
    } else {
      console.log('Password incorrect');
      confirm("Password incorrect");
    }
}




/**
* Set up an array of elements found in the DOM
* @function
* @since 20/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @param {object[]} el - list
* @param {object[]} el.username - list of usernames
* @param {object[]} el.psw - list of passwords
* @returns checks the coresponding list
* @throws entity is not found
*/
function prepareHandles() {
  el.username = document.querySelector("#username");
  el.psw = document.querySelector("#psw")
  el.login = document.querySelector("#login")
}


/**
* Connect listeners to functions
* @function
* @since 20/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @param {object[]} el.login - listener for login
* @returns checks the coresponding list
* @throws entity is not found
*/
function addEventListeners() {
  el.login.addEventListener('click', loadUsers);
}

/**
* Connect listeners to functions
* @function
* @since 20/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @param pageLoaded loads page and listeners
* @returns loaded page and listeners
* @throws page and lister not loaded
*/
function pageLoaded() {
  prepareHandles();
  addEventListeners();
}

window.addEventListener('load', pageLoaded);
