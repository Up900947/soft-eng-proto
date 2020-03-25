'use strict';
const el = {};

async function loadFiles() {
  const id = el.courseID.textContent + "," + el.moduleID.textContent;
  const response = await fetch('/api/files' + id);
  let files;
  if (response.ok) {
    files = await response.json();
  } else {
    files = [{ msg: 'failed to load files' }];
  }
  showFiles(files);
}

function showFiles(files) {
  for (const file of files) {
    addLink(file);
  }
}

function addLink(file) {
  const li = document.createElement('li');
  li.classList.add('files');
  const a = document.createElement('a');

  a.text = file;
  a.href = el.moduleID.textContent + '/' + file;

  a.download = file;
  li.append(a);
  el.content.append(li);
}

async function uploadFile() {
  const payload = new FormData();
  payload.append('filename', el.filename.value);
  payload.append('course', el.courseID.textContent);
  payload.append('module', el.moduleID.textContent);

  if (el.file.files.length) {
    payload.append('file', el.file.files[0]);
  }

  const response = await fetch('/api/files', {
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
  el.content = document.querySelector("#myUL");
  el.filename = document.querySelector("#file-label");
  el.courseID = document.querySelector("#courseID");
  el.moduleID = document.querySelector("#moduleID");
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
