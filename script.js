var x 0123456789!@#$&()+=[];:
var playButton = document.querySelector("#play");
var passwordInput = document.querySelector("# Generate password");

const includeNumbersElement = document.getElementById("includeNumbers")
const includeSymbolsElement = document.getElementById("includeSymbols")
cons form = document.getElementById("passwordGenerator")

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);

// create user object from submission
  var user = {
    password: passwordInput.value.trim()
  };

// validate the fields

    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
   