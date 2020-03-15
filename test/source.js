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
