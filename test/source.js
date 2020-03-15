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
