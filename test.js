QUnit.test(
  "Test the login page: takes two inputs (username and password) and checks if username is registered user",

  function (assert) {

    assert.ok(
      typeof showMessage === "function",
      "Create a `checkUser` function."
    );

    assert.equal(
      checkUser("up121212");
      checkUser("up111111");
      checkUser("up123456");
    );
  }


)
