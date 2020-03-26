'use strict';
const el = {};


/**
* Retrieves the user list from the server
* @async
* @function
* @since 20/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @returns load and shows files
* @throws else statement msg - 'failed to load files'
*/
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

/**
* A call to show and create link for each file
* @function
* @since 20/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @param {FILE} [files] - users name
* @returns linked files
*/
function showFiles(files) {
  for (const file of files) {
    addLink(file);
  }
}

/**
* creates link for each file
* @function
* @since 20/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @param {FILE} [files] - users name
* @returns linked files
*/
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

/**
* creates the payload to upload for each file
* @async
* @function
* @since 20/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @returns uploaded file confirmation
* @throws else statement msg - 'failed to send file'
*/
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


/**
* Set up an array of elements found in the DOM
* @function
* @since 20/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @returns checks the coresponding list
* @throws entity is not found
*/
function prepareHandles() {
  el.file = document.querySelector("#file");
  el.upload = document.querySelector("#upload");
  el.content = document.querySelector("#myUL");
  el.filename = document.querySelector("#file-label");
  el.courseID = document.querySelector("#courseID");
  el.moduleID = document.querySelector("#moduleID");
}

/**
* Connect listener of upload to functions
* @function
* @since 20/03/2020
* @author up899210,up948053,up904277,up916282,Up900947,up849725
* @returns checks the coresponding list
* @throws entity is not found
*/
function addEventListeners() {
  el.upload.addEventListener('click', uploadFile);
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
  loadFiles();
}

window.addEventListener('load', pageLoaded);
