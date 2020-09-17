const colors = ["blue", "green", "yellow"];

function createSquare() {
    const container = document.createElement("div");
    container.classList.add("square");

    let countColor= 0;
    container.style.backgroundColor = colors[countColor];

    container.addEventListener("click", () => {
       countColor = countColor + 1 === colors.length ? 0 : countColor + 1;
        container.style.backgroundColor = colors[countColor];
    });

    return container;
}

const wrapper = document.querySelector("#wrapper");

for (let i = 0; i < 5; i++) {
    const square = createSquare();
    wrapper.appendChild(square);
}
