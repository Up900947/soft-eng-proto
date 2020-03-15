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
