'use strict';
const el = {};

async function uploadFile() {
  const payload = new FormData();
  payload.append('file', el.file.value);

  console.log(payload);

  const response = await fetch('upload', {
    method: 'POST',
    body: payload,
  });

  if (response.ok) {
     const file = await response.json();
     console.log("after server" + file);
     el.content.append(file);
  } else {
    console.log('failed to send message', response);
  }
}

//Set up an array of elements found in the DOM
function prepareHandles() {
  el.file = document.querySelector("#file");
  el.upload = document.querySelector("#upload");
  el.content = document.querySelector("#content");
}

//Connect listeners to functions
function addEventListeners() {
  el.upload.addEventListener('click', uploadFile);
}

function pageLoaded() {
  prepareHandles();
  addEventListeners();
}

window.addEventListener('load', pageLoaded);
