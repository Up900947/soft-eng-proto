'use strict';
const el = {};

async function loadFiles() {
   const response = await fetch('files');
   let files;
   if (response.ok) {
     files = await response.json();
     showFiles(files);
   } else {
     files = [{ msg: 'failed to load files' }];
   }
}

function showFiles(files) {
  for (const file of files) {
    addLink(file);
  }
}

function addLink(file) {
  console.log(file);
  const li = document.createElement('li');
  li.classList.add('files');
  const a = document.createElement('a');

  console.log(file.filename);
  a.text = file.filename;
  a.href = 'upload/' + file.filename + '.pdf';
  li.append(a);
  el.content.append(li);
}

async function uploadFile() {
  const payload = new FormData();
  if (el.file.files.length) {
  payload.append('file', el.file.files[0]);
  }

  const response = await fetch('files', {
    method: 'POST',
    body: payload,
  });

  if (response.ok) {
     const file = await response.json();
     addLink(file);
  } else {
    console.log('failed to send file', response);
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
  loadFiles();
}

window.addEventListener('load', pageLoaded);
