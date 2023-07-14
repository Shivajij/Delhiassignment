 function storeLoginValue(event) {
    event.preventDefault()
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    var LoginData = {
      gmail: email,
      password: password
    };

    console.log(LoginData);
  }

  const textElement = document.querySelector('.text');
const text = textElement.textContent;
textElement.textContent = '';

let index = 0;

function generateText() {
  textElement.textContent += text[index];
  index++;

  if (index < text.length) {
    setTimeout(generateText, 100); // Adjust the delay between characters (in milliseconds) if needed
  }
}

generateText();
