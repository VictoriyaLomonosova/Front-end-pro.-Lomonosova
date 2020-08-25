const button = document.querySelector("button");
const par = document.querySelector("p#result");
function countTagswrapper() {
  const amountOfTags = document.querySelector("#wrapper");
  const res = amountOfTags.children.length;
  const amountOfP = document.querySelectorAll("#wrapper p");
  const res1 = amountOfP.length;
  const amountOfSpan = document.querySelectorAll("#wrapper span");
  const res2 = amountOfSpan.length;
  const allTags = document.querySelector("#wrapper").children;
  let amountOfString = 0;
  let amountOfNumber = 0;
  for (let i = 0; i < allTags.length; i++) {
    let value = Number(allTags[i].innerText);
    if (Number.isNaN(value)) {
      amountOfString += 1;
    } else {
      amountOfNumber += 1;
    }
  }
  const p = par;
  p.innerText = ` Количество разных тегов ${res}, количество параграфов ${res1}, количество спанов ${res2}, количество тегов с числами ${amountOfNumber}, количество тегов, в которых есть строка ${amountOfString}`;
}
if (button !== null) {
  button.addEventListener("click", countTagswrapper);
}
