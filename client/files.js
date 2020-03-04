'use strict';
const el = {};

async function uploadFile() {
  const payload = new FormData();
  payload.append(el.file.value);

  const response = await fetch('upload' {
    method: 'POST',
    body: payload,
  });

  if (response.ok) {

  } else {
    console.log('failed to send message', response);
  }
}

//Set up an array of elements found in the DOM
function prepareHandles() {
  el.file = document.querySelector("#file");
  el.upload = document.querySelector("#upload");
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
