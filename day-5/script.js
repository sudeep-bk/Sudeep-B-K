var username = "gmit";
var password = "gmit123";

function fnValidate() {
  let inputUsername = document.getElementById("username").value;
  let inputPassword = document.getElementById("password").value;

  if (inputUsername === username && inputPassword === password) {
    console.log("Success");
  } else {
    console.log("Failure");
  }
}

function fnValidateSignUpForm(e) {
  e.preventDefault();
  let formData = e.target;
  let fname = formData.fname.value;
  let lname = formData.lname.value;
  let email = formData.email.value;
  let password = formData.password.value;
  let confirmPassword = formData.confirmPassword.value;

  let EmailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  // Minimum eight characters, at least one letter and one number:
  let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  let validateFname = fname.length > 4 ? true : false;
  let validateLname = lname.length > 4 ? true : false;
  let validateEmail = EmailPattern.test(email);
  let validatePassword = passwordPattern.test(password);
  let validateConfirmPassword = passwordPattern.test(confirmPassword);

  // For validating fname
  if (!fname) {
    document.getElementsByClassName("fname-invalid")[0].style.display = "none";
    document.getElementsByClassName("fname-empty")[0].style.display = "block";
  } else if (!validateFname) {
    document.getElementsByClassName("fname-empty")[0].style.display = "none";
    document.getElementsByClassName("fname-invalid")[0].style.display = "block";
  }


  if (!lname) {
    document.getElementsByClassName("lname-invalid")[0].style.display = "none";
    document.getElementsByClassName("lname-empty")[0].style.display = "block";
  } else if (!validateLname) {
    document.getElementsByClassName("lname-empty")[0].style.display = "none";
    document.getElementsByClassName("lname-invalid")[0].style.display = "block";
  }

  if (
    validateFname &&
    validateLname &&
    validateEmail &&
    validatePassword &&
    validateConfirmPassword &&
    password === confirmPassword
  ) {
    console.log("Success");
  } else {
    console.log("Failure");
  }
}

function validateFields(inputValue) {
  // if (inputValue.length > 4) {
  //   return "valid";
  // } else {
  //   return "invalid";
  // }

  return inputValue.length > 4 ? "valid" : "invalid";
}