'use strict';
const el = {};

async function sendUser() {
    //create payload from userdetails
    const payload = {
      username: el.username.value,
      email: el.email.value,
      password: el.psw.value,
      course: el.course.value,
     };
     console.log('Payload', payload);

    //send data to the server
    const response = await fetch('users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    console.log(response);

    if (response.ok) {
        //confirmation message
        if (confirm("Register successful")) {
            window.location.href = '/index.html';
        }
    } else {
        console.log('failed to send message', response);
    }
}

function checkPasswords() {
    if (el.psw.value === el.pswRepeat.value) {
        sendUser();
    } else {
        console.log('Passwords does not match');
        confirm("Passwords does not match");
    }
}

//Set up an array of elements found in the DOM
function prepareHandles() {
  el.username = document.querySelector("#username");
  el.email = document.querySelector("#email");
  el.psw = document.querySelector("#psw");
  el.pswRepeat = document.querySelector("#pswRepeat");
  el.course = document.querySelector("#course option:checked");
  el.submit = document.querySelector("#signupbtn");
}

//Connect listeners to functions
function addEventListeners() {
  el.submit.addEventListener('click', checkPasswords);
}

function pageLoaded() {
  prepareHandles();
  addEventListeners();
}

window.addEventListener('load', pageLoaded);
