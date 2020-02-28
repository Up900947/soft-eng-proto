'use strict';
const el = {};

async function sendUser() {
  //create payload from userdetails
  const payload = {
    username: //username input value
    password: //password input value
    course: //course input value
  }

  //send data to the server
  const respone = await fetch ('users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload);
  })

  if (response.ok) {
    //confirmation message
} else {
  console.log('failed to send message', response);
}

//Set up an array of elements found in the DOM
function prepareHandles() {
  //add button for registration
}

//Connect listeners to functions
function addEventListener() {
  //button for reg - click - sendUser
}

function pageLoaded() {
  prepareHandles();
  addEventListeners();
}

window.addEventListener('load', pageLoaded);
