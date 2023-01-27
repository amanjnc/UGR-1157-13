console.log("in file");

var form = document.getElementById("form");
form.onsubmit = function (event) {
  console.log("submit");
  event.preventDefault();
  validatefirstName();
  validatelastName();
  validateEmail();
  validateMessage();
  validatePhoneNumber();
};

function validatefirstName() {
  var firstname = document.getElementById("first").value;
  if (firstname.length < 2) {
    alert("Please enter a valid First name");
  }
}

function validatelastName() {
  var lastname = document.getElementById("last").value;
  alert("Please enter a valid Last name");
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var emailRegEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegEx.test(email)) {
    alert("Please enter a valid email address");
  }
}
function validateMessage() {
  var messages = document.getElementById("message").value;
  if (messages.length < 10) {
    alert("Please enter a message with at least 10 characters");
  }
}
function validatePhoneNumber() {
  var phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var phoneNumberInput = document.getElementById("phone");
  var phoneNumberError = document.getElementById("phoneNumberError");

  if (phoneNumberInput.value.match(phoneNumberRegex)) {
    alert("Please enter a valid phone number in the format XXX-XXX-XXXX.");
  }
}
