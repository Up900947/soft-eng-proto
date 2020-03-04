'use strict';

function uploadFile() {

}

//Set up an array of elements found in the DOM
function prepareHandles() {
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
