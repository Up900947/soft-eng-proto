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

QUnit.test(
  "Test the login page: checks if password is valid and registered",

  function (assert) {
    assert.ok(
      typeof checkPassword === "function",
      "Create a `checkPassword` function."
    );

    // registered/valid values
    assert.ok(
      checkPassword("123", "123"),
      "Check up123456 value (valid)"
    );
    assert.ok(
      checkPassword("111", "111"),
      "Check up111111 value (valid)"
    );
    assert.ok(
      checkPassword("1212", "1212"),
      "Check up121212 value (valid)"
    );

    //expect fail
    assert.notOk(
      checkPassword("123", "1234"),
      "Check up123456 value (invalid)"
    );
    assert.notOk(
      checkPassword("111", "1114"),
      "Check up111111 value (invalid)"
    );
    assert.notOk(
      checkPassword("1212", "12124"),
      "Check up121212 value (invalid)"
    );
  }
)
