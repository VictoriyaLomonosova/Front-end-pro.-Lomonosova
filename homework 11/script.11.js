const wrapper = document.querySelector("#wrapper");

if (wrapper !== null) {
  const list = createUsersContainerList();
  const form = createForm((value) => {
    const UsersList = createUsersList({
      text: value,
    });
    list.appendChild(UsersList);
  });

  const usersNames = ["James", "Tory", "Charlie", "Leny", "Jeny"];

  for (const user of usersNames) {
    const UsersList = createUsersList({
      text: user,
    });
    list.appendChild(UsersList);
  }

  wrapper.appendChild(form);
  wrapper.appendChild(list);
}

function createForm(onAdd) {
  const container = document.createElement("div");
  container.className = "form";

  const okButton = createButton({
    text: "Send",
    disabled: true,
  });

  const input = createInput({
    placeholder: "Enter Your Name",
  });

  const span = createSpan({
    text: "Name: ",
  });

  okButton.addEventListener("click", () => {
    if (typeof onAdd === "function") {
      onAdd(input.value);
      input.value = "";
      okButton.disabled = true;
      input.focus();
    }
  });

  input.addEventListener("input", (event) => {
    const value = event.target.value;
    okButton.disabled = value === "";
  });

  container.appendChild(span);
  container.appendChild(input);
  container.appendChild(okButton);

  return container;
}

function createSpan(props) {
  const text = props.text || "";

  const span = document.createElement("span");
  span.innerHTML = text;

  return span;
}

function createInput(props) {
  const placeholder = props.placeholder || "";

  const input = document.createElement("input");
  input.placeholder = placeholder;

  return input;
}

function createButton(props) {
  const text = props.text || "";
  const disabled = props.disabled || false;

  const button = document.createElement("button");

  button.type = "button";
  button.innerHTML = text;
  button.disabled = disabled;

  return button;
}

function createUsersContainerList() {
  const list = document.createElement("ul");
  list.className = "list_container";

  return list;
}

function createUsersListContainer() {
  const UsersList = document.createElement("li");
  UsersList.className = "UsersList_item";

  return UsersList;
}

function createUsersListName() {
  const element = document.createElement("li");
  element.className = "username";

  return element;
}

function createUsersListBtnEdit() {
  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "edit";
  editButton.innerHTML = "Edit";

  editButton.addEventListener("click", () => {
    const newUser = prompt("Введите новое имя пользователя");
    if (newUser) {
      editButton.parentNode.firstChild.innerHTML = newUser;
    }
  });

  return editButton;
}

function createUsersListBtnDel() {
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "del";
  deleteButton.innerHTML = "Delete";

  deleteButton.addEventListener("click", () => {
    const deleteUser = confirm("Удалить пользователя?");
    if (deleteUser) {
      deleteButton.parentNode.remove();
    }
  });

  return deleteButton;
}

function createUsersList(props) {
  const UsersList = createUsersListContainer();

  const user = createUsersListName(props);
  const text = props.text || "";
  user.innerHTML = text;
  UsersList.appendChild(user);

  const btnEd = createUsersListBtnEdit();
  UsersList.appendChild(btnEd);

  const btnDel = createUsersListBtnDel();
  UsersList.appendChild(btnDel);

  return UsersList;
}
