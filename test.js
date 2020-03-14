QUnit.test(
  "Test the login page: checks if username is registered",

  function (assert) {
    assert.ok(
      typeof checkUser === "function",
      "Create a `checkUser` function."
    );

    assert.ok(checkUser("up121212"));
    assert.ok(checkUser("up123456"));
    assert.ok(checkUser("up111111"));

    done();
  }
)
