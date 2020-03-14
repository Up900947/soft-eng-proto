QUnit.test(
  "Test the login page: takes two inputs (username and password) and checks if username is registered user",

  function (assert) {

    assert.ok(
      typeof checkUser === "function",
      "Create a `checkUser` function."
    );

    checkUser("up121212");

    const done = assert.async(1);
    assert.expect(2);

    setTimeout(checkUser2, 500);
    setTimeout(checkUser3, 1000);

    function checkUser2() {
      assert.ok(checkUser("up111111"));
    };

    function checkUser3() {
      assert.ok(checkUser("up123456"));
    };

    done();
  }


)
