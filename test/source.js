//Login tests functions ------------------------------------------------
//validation for user
function checkUser(users, test_username) {
  const username = test_username;
  let found = false;

  for (const user of users) {
    if (user === username) {
      found = true;
    }
  }
  return found;
}

//validation for password
function checkPassword(user, test_username) {
    const password = test_username;

    if (user === password) {
      return true;
    } else {
      return false;
    }
}

//Register tests functions ---------------------------------------------
//check password and repeat password
function checkPasswords(password, repeatPassword) {
    if (password === repeatPassword) {
        return true;
    } else {
        return false;
    }
}

function sendUser(elm, username, email, psw, course) {
    //create payload from userdetails
    const payload = {
      username: username,
      email: email,
      password: psw,
      course: course,
     };

    const li = document.createElement("li");
    li.textContent = username;
    elm.append(li);
}

//Files tests functions ---------------------------------------------
//check uploadFile function
function uploadFile(elm, filename, file) {
  const payload = new FormData();
  payload.append('filename', filename);

  if (file.length) {
    payload.append('file', file);
  }

  const li = document.createElement("li");
  li.textContent = filename;
  elm.append(li);
}

//Search bar tests functions ---------------------------------------------
//check search function
function searchFunction(test_input, elm_ul, elm_li, elm_found) {
  const filter = test_input.toUpperCase();
  let a;
  let i;
  let txtValue;

  for (i = 0; i < elm_li.length; i++) {
      a = elm_li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      const li = document.createElement("li");
      li.textContent = txtValue;
      elm_found.append(li);
    } else {
      //none
    }
  }
}

//helper function to delete all elements of ul found
function removeElements(elm) {
  while (elm.hasChildNodes()) {
    elm.removeChild(elm.firstChild);
  }
}
