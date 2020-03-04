'use strict';

'use strict';
const el = {};

async function sendUser() {
  //create payload from userdetails
  const payload = {
    username: //username input value
    password: //password input value
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

  const response = await fetch('messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    el.message.value = '';
    const updatedMessages = await response.json();
    removeContentFrom(el.messagelist);
    showMessages(updatedMessages, el.messagelist);
  } else {
    console.log('failed to send message', response);
  }
}

//Set up an array of elements found in the DOM
function prepareHandles() {
  //add button for login
}

//Connect listeners to functions
function addEventListener() {
  //button for login - click - checkUser
}

function pageLoaded() {
  prepareHandles();
  addEventListeners();
}

window.addEventListener('load', pageLoaded);
