var forms = document.getElementById("form");
forms.addEventListener("submit", function(event) {
    event.preventDefault();
    var firstnameError = document.getElementById("firstnameError").innerHTML;
    var lastnameError = document.getElementById("lastnameError").innerHTML;
    var emailError = document.getElementById("emailError").innerHTML;
    var messageError = document.getElementById("messageError").innerHTML;
    var phoneNumberError = document.getElementById("phoneNumberError").innerHTML;
    if(firstnameError === "" && lastnameError === "" && emailError === "" && messageError === "" && phoneNumberError === "" ) {
        form.submit();
    }
    else{
        alert('Please enter a valid input');
    }
});
function validatefirstName() {
    var firstname = document.getElementById("first").value;
    if (firstname.length < 2) {
        document.getElementById("firstnameError").innerHTML = "Please enter a valid First name";
    } else {
        document.getElementById("firstnameError").innerHTML = "";
    }
}
function validatelastName() {
    var lastname = document.getElementById("last").value;
    if (lastname.length < 2) {
        document.getElementById("lastnameError").innerHTML = "Please enter a valid Last name";
    } else {
        document.getElementById("lastnameError").innerHTML = "";
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegEx.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address";
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
}
function validateMessage() {
    var messages = document.getElementById("message").value;
    if (messages.length < 10) {
        document.getElementById("messageError").innerHTML = "Please enter a message with at least 10 characters";
    } else {
        document.getElementById("messageError").innerHTML = "";
    }
}
function validatePhoneNumber() {
    var phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phoneNumberInput = document.getElementById("phone");
    var phoneNumberError = document.getElementById("phoneNumberError");
  
    if(phoneNumberInput.value.match(phoneNumberRegex)) {
      phoneNumberError.innerHTML = "";
      return true;
    } else {
      phoneNumberError.innerHTML = "Please enter a valid phone number in the format XXX-XXX-XXXX.";
      return false;
    }
  }
