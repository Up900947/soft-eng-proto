QUnit.module("Login tests");
//checkUser test
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
//checkPassword test
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

QUnit.module("Register tests");
//checkPasswords test
QUnit.test(
  "Test the register page: checks if password and repeat password is identical",

  function (assert) {
    assert.ok(
      typeof checkPasswords === "function",
      "Create a `checkPasswords` function."
    );

    // registered/valid values
    assert.ok(
      checkPasswords("123", "123"),
      "Check up123456 value (valid)"
    );
    assert.ok(
      checkPasswords("111", "111"),
      "Check up111111 value (valid)"
    );
    assert.ok(
      checkPasswords("1212", "1212"),
      "Check up121212 value (valid)"
    );

    //expect fail
    assert.notOk(
      checkPasswords("123", "1234"),
      "Check up123456 value (invalid)"
    );
    assert.notOk(
      checkPasswords("111", "1114"),
      "Check up111111 value (invalid)"
    );
    assert.notOk(
      checkPasswords("1212", "12124"),
      "Check up121212 value (invalid)"
    );
  }
)
//sendUser test
QUnit.test(
  "Test the register page: checks if function sendUser successfully sends and receive user details",

  function (assert) {
    assert.ok(
      typeof sendUser === "function",
      "Create a `sendUser` function."
    );

    // registered/valid values
    sendUser(window.users, "up232323", "up232323@myport.ac.uk", "2323", "Computer Science");
    assert.equal(
      window.users.children.length,
      1,
      "Add up232323 value to list"
    );
    sendUser(window.users, "up343434", "up343434@myport.ac.uk", "3434", "Business Information System");
    assert.equal(
      window.users.children.length,
      2,
      "Add up343434 value to list"
    );
    sendUser(window.users, "up454545", "up454545@myport.ac.uk", "454545", "Computing");
    assert.equal(
      window.users.children.length,
      3,
      "Add up454545 value to list"
    );
  }
)

QUnit.module("Files tests");
//uploadFile test
QUnit.test(
  "Test the files page: checks if file is uploaded",

  function (assert) {
    assert.ok(
      typeof uploadFile === "function",
      "Create a `uploadFile` function."
    );

    // registered/valid values
    sendUser(window.files, "sample.pdf", );
    assert.equal(
      window.files.children.length,
      1,
      "Add sample.pdf value to list"
    );
    sendUser(window.files, "new file.pdf", );
    assert.equal(
      window.files.children.length,
      2,
      "Add new file.pdf value to list"
    );
  }
)
