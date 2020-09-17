
function createListItem() {
  const li = document.createElement("li");
  return li;
}

const wrapper = document.querySelector("#wrapper");
const list = document.createElement("ul");
list.classList.add("Clickable");
for (let i = 0; i < 3; i++) {
  const listItem = createListItem();
  wrapper.appendChild(list);
  list.appendChild(listItem);
  listItem.innerText = "Hello"
    listItem.addEventListener("click", function (e) {
    let active = document.querySelector(".Clickable .active");
    if (active) active.classList.remove("active");
    e.target.classList.add("active");
  });
}
