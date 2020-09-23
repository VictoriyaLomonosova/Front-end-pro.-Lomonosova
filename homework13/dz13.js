function createForm() {
  const container = document.createElement("form");
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

  const spanEmail = createSpan({
    text: "Email: ",
  });
  const spanPassword = createSpan({
    text: "Password: ",
  });

  let object = {};
  const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const regPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,}/g;
  submitButton.addEventListener("click", () => {
    object = { email: inputEmail.value, password: inputPassword.value };
    console.log(object);
    inputEmail.value = "";
    inputPassword.value = "";
    submitButton.disabled = true;
  });
  function validateEmail() {
    if (regEmail.test(inputEmail.value) == false) {
      inputEmail.classList.add("invalid");
      submitButton.disabled = true;
    } else {
      inputEmail.classList.remove("invalid");
      submitButton.disabled = false;
    }
  }

  function validatePassword() {
    if (regPassword.test(inputPassword.value) == false) {
      inputPassword.classList.add("invalid");
      submitButton.disabled = true;
    } else {
      inputPassword.classList.remove("invalid");
      submitButton.disabled = false;
    }
  }

  inputEmail.addEventListener("input", (event) => {
    validateEmail(inputEmail.value);
    const value = event.target.value;
    submitButton.disabled = true;
  });

  inputPassword.addEventListener("input", (event) => {
    validatePassword(inputPassword.value);
    const value = event.target.value;
  });
  container.appendChild(spanEmail);
  container.appendChild(inputEmail);
  container.appendChild(spanPassword);
  container.appendChild(inputPassword);

  container.appendChild(submitButton);

  return container;
}
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

const wrapper = document.querySelector("#wrapper");

const form = createForm();
wrapper.appendChild(form);
