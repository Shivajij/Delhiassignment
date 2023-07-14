function storeSignupValue(event) {
    event.preventDefault()
    var name = document.getElementById("signup-name").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    var signupData = {
      name: name,
      email: email,
      password: password
    };

    console.log(signupData);
  }