function createSquare() {
  const container = document.createElement("div");
  container.classList.add("square");
  return container;
}

function createButton() {
  const button = document.createElement("button");

  return button;
}

const wrapper = document.querySelector("#wrapper");
for (let i = 0; i < 5; i++) {
  const square = createSquare();
  const plusButton = createButton();
  plusButton.classList.add("plus");
  plusButton.innerText = "+";
  const minusButton = createButton();
  minusButton.classList.add("minus");
  minusButton.innerText = "-";
  const span = document.createElement("span");
  wrapper.appendChild(square);
  square.appendChild(plusButton);
  square.appendChild(minusButton);
  square.appendChild(span);
  span.innerText = 0;
  let count = 0;

  plusButton.addEventListener("click", () => {
    count++;
    span.innerText = count;
  });

  minusButton.addEventListener("click", () => {
    count--;
    span.innerText = count;
  });
}
