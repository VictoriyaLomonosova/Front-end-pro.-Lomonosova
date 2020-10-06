const ul = document.querySelector("ul");
const buttonSave = document.querySelector("button");
const input = document.getElementById("item");
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

function liMaker(text) {
  const li = document.createElement("li");
  const deleteButton = createDeletebutton();
  const span = document.createElement("span");
  ul.appendChild(li);
  li.appendChild(span);
  span.innerText = text;
  li.appendChild(deleteButton);
}

function createDeletebutton() {
  const button = document.createElement("button");
  button.innerHTML = "Delete";

  button.addEventListener("click", (e) => {
    e.preventDefault();
    let currentValue = e.target.parentElement;
    ul.removeChild(currentValue);

    let itemsArray = Array.from(ul.children).map(
      (child) => child.querySelectorAll("span")[0].innerText
    );
    console.log(itemsArray);
    localStorage.setItem("items", JSON.stringify(itemsArray));
  });
  return button;
}

buttonSave.addEventListener("click", () => {
  if (input.value !== "") {
    itemsArray.push(input.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    liMaker(input.value);

    input.value = "";
  } else {
    throw "Error";
  }
});

data.forEach((item) => {
  liMaker(item);
});

try {
  localStorage.setItem("items", JSON.stringify(itemsArray));
} catch (e) {
  if (e == QUOTA_EXCEEDED_ERR) {
    alert("Превышен лимит");
  }
}
