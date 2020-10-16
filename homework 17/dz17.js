const ul = document.querySelector("ul");
const buttonSave = document.querySelector("button");
const input = document.getElementById("item");
const ITEMS = "Li_element";
let itemsArray = getItems();

function getItems() {
  try {
    return JSON.parse(localStorage.getItem(ITEMS)) || [];
  } catch  {
    return [];
  }
}
function setItems(array) {
  localStorage.setItem(ITEMS, JSON.stringify(array));
}
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
    let itemsArray = Array.from(ul.querySelectorAll("li span")).map(
      (i) => i.innerText
    );

    setItems(itemsArray);
  });
  return button;
}

buttonSave.addEventListener("click", () => {
  if (input.value !== "") {
    itemsArray.push(input.value);
    setItems(itemsArray);
    liMaker(input.value);
    input.value = "";
  } else {
    throw "Error";
  }
});

itemsArray.forEach((item) => {
  liMaker(item);
});
