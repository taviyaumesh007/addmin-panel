const emailValidation = () => {
  const emailValue = "taviya.umesh007@gmail.com";
  const mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const email = document.getElementById("email").value;

  if (email.match(mailformat) && email.match(emailValue)) {
    return true;
  } else if (email.length == 0) {
    document.querySelector("#email-error-msg").innerHTML = "Enter Email";
    const inputBox = document.getElementById("email");
    // inputBox.style.borderColor = "#FFC0C0";
    inputBox.style.border = "1px solid #FE0000";
  } else {
    document.querySelector("#email-error-msg").innerHTML = "invalid Email";
    const inputBox = document.getElementById("email");
    // inputBox.style.borderColor = "#FFC0C0";
    inputBox.style.border = "1px solid #FE0000";
  }
};

const passwordValidation = () => {
  const passwordValue = "Umesh@12345";
  const passwordFormat = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const password = document.getElementById("Password").value;

  if (password.match(passwordFormat) && password.match(passwordValue)) {
    return true;
  } else if (password.length == 0) {
    document.querySelector("#psw-error-msg").innerHTML = "Enter passowrd";
    const inputBox = document.getElementById("Password");
    inputBox.style.border = "1px solid #FE0000";
  } else {
    document.querySelector("#psw-error-msg").innerHTML = "invalid passowrd";
    const inputBox = document.getElementById("Password");
    inputBox.style.border = "1px solid #FE0000";
  }
};

function createNewAccoun() {
  let stateObj = { id: "100" };
  window.history.replaceState(
    stateObj,
    "create account",
    "../register/register.html"
  );
}

const signUp = () => {
  emailValidation();
  passwordValidation();
};
