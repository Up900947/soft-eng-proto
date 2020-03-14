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
QUnit.test(
  "Test the login page: checks if username is registered",

  function (assert) {
    assert.ok(
      typeof checkUser === "function",
      "Create a `checkUser` function."
    );

    // registered/valid values
    assert.ok(
      checkUser(["up121212", "up111111", "up123456"], "up123456"),
      "Check valid values"
    );

    //expect fail
    assert.notOk(
      checkUser(["up121212", "up111111", "up123456"], "up123123"),
      "Check invalid values"
    );
  }
)
