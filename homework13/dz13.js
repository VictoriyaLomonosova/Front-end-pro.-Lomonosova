const wrapper = document.querySelector("#wrapper");
const form = createForm();
const inputEmail = createInput({
  placeholder: "Enter Your Email",
  type: "text",
});

const inputPassword = createInput({
  placeholder: "Enter Your Password",
  type: "password",
});

const submitButton = createButton({
  text: "Submit",
  disabled: true,
});
const labelEmail = createLabel({
  text: "Email:",
});
const LabelPassword = createLabel({
  text: "Password:",
});
wrapper.appendChild(form);
form.appendChild(labelEmail);

form.appendChild(inputEmail);
form.appendChild(LabelPassword);
form.appendChild(inputPassword);
form.appendChild(submitButton);

let object = {};
const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const regPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])[0-9a-z!@#$%^&*]{8,}/g;

function logSubmit(event) {
  if (inputEmail.value !== "" && inputPassword.value !== "")
    object = { email: inputEmail.value, password: inputPassword.value };
  console.log(object);
  event.preventDefault();
  inputEmail.value = "";
  inputPassword.value = "";
}

inputEmail.onblur = function () {
  if (regEmail.test(inputEmail.value) == false) {
    inputEmail.classList.add("invalid");
    submitButton.disabled = true;
    inputEmail.focus();
  } else {
    inputEmail.classList.remove("invalid");
  }
};

inputPassword.onblur = function () {
  if (regPassword.test(inputPassword.value) == false) {
    inputPassword.classList.add("invalid");
    submitButton.disabled = true;
  } else {
    inputPassword.classList.remove("invalid");
    submitButton.disabled = false;
  }
};

form.addEventListener("submit", logSubmit);

function createSpan(props) {
  const text = props.text || "";

  const span = document.createElement("span");
  span.innerHTML = text;

  return span;
}
function createInput(props) {
  const type = props.type || "";
  const placeholder = props.placeholder || "";

  const input = document.createElement("input");
  input.placeholder = placeholder;
  input.type = type;
  return input;
}

function createButton(props) {
  const text = props.text || "";
  const disabled = props.disabled || false;

  const button = document.createElement("button");

  button.type = "submit";
  button.innerHTML = text;
  button.disabled = disabled;

  return button;
}

function createForm() {
  const form = document.createElement("form");
  return form;
}
function createLabel(props) {
  const text = props.text || "";

  const label = document.createElement("span");
  label.innerHTML = text;

  return label;
}
