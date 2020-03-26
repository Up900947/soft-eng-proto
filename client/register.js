'use strict';
const el = {};


/**
* creates payload from userdetails and sends to server
* @async
* @function
* @since 19/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @returns confirmation message - Register successful
* @throws else statement msg - 'failed to send message'
*/
async function sendUser() {
    const payload = {
      username: el.username.value,
      email: el.email.value,
      password: el.psw.value,
      course: el.course.value,
     };
     console.log('Payload', payload);
    const response = await fetch('api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    console.log(response);
    if (response.ok) {
        if (confirm("Register successful")) {
            window.location.href = '/index.html';
        }
    } else {
        console.log('failed to send message', response);
    }
}


/**
* Checks inputed password to stored password
* @function
* @since 19/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @returns SendsUser() function
* @throws else statement msg - 'Passwords does not match'
*/
function checkPasswords() {
    if (el.psw.value === el.pswRepeat.value) {
        sendUser();
    } else {
        console.log('Passwords does not match');
        confirm("Passwords does not match");
    }
}

/**
* Set up an array of elements found in the DOM
* @function
* @since 19/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @returns el.X depending on the select array
* @throws incorrect data type
*/
function prepareHandles() {
  el.username = document.querySelector("#username");
  el.email = document.querySelector("#email");
  el.psw = document.querySelector("#psw");
  el.pswRepeat = document.querySelector("#pswRepeat");
  el.course = document.querySelector("#course option:checked");
  el.submit = document.querySelector("#signupbtn");
}


/**
* Connect listener for sumnit button to functions
* @function
* @since 19/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @returns loaded page and listeners
* @throws page and lister not loaded
*/
function addEventListeners() {
  el.submit.addEventListener('click', checkPasswords);
}

/**
* Connect listeners to functions
* @function
* @since 20/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @returns loaded page and listeners
* @throws page and lister not loaded
*/
function pageLoaded() {
  prepareHandles();
  addEventListeners();
}

window.addEventListener('load', pageLoaded);
