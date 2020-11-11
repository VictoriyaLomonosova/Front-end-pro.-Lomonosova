const phrasses = [
  "Как делишки?",
  "Приятно поговорить с умным человеком!",
  "У Вас все получится, не сомневайтесь!",
  "У меня все хорошо, а у Вас?",
  "Как Вам погодка сегодня?",
  "Хватит лениться",
  "Самое время для новых свершений!",
  "Рада,слышить это",
  "Привет!",
  "Я, Алиса",
  "Нормально",
  "Вы думаете, что говорите?!",
  "Хм, чтобы Вам рассказать...",
  "Почему, Вы разговариваете с ботом?:)",
  "Ну, ну, не переживайте, Вы так",
  "Пора задуматся над этим вопросом",
  "Тогда, вперед, дерзайте!",
  "Js поможет Вам!",
  "Да, ну Вас!",
  "Спасибо",
  "Круто!",
  "Прикольно!",
  "А вот это уже обидно",
  "Да не за что",
];

const mainDiv = document.getElementById("main");
const form = document.querySelector("form");
const button = document.querySelector("button");
button.disabled = true;
const inputField = document.getElementById("input");

function randomValueBot() {
  let min = 0;
  let max = phrasses.length - 1;
  let result = Math.floor(Math.random() * (max - min + 1)) + min;
  return phrasses[result];
}
function timeDelay(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
function scrollToLastMessage() {
  const lastMessageInChat = mainDiv.lastChild;

  lastMessageInChat.scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
}
function addChat(input) {
  const userDiv = document.createElement("div");
  userDiv.classList = "user";

  userDiv.innerHTML = `Вы: ${input}`;

  mainDiv.appendChild(userDiv);
  scrollToLastMessage();
}

async function botAnswer() {
  const botDiv = document.createElement("div");
  botDiv.classList = "bot";

  if (inputField.value !== "Пока!") {
    await timeDelay(3000);
    botDiv.innerHTML = `Алиса: ${randomValueBot()}`;
    mainDiv.appendChild(botDiv);
  } else {
    await timeDelay(2000);
    botDiv.innerHTML = `Алиса:Пока!Еще увидимся`;

    mainDiv.appendChild(botDiv);
    inputField.setAttribute("disabled", "disabled");
  }

  scrollToLastMessage();
}

form.addEventListener("submit", function (e) {
  let input = inputField.value;
  if (input !== "") addChat(input);
  main();

  e.preventDefault();
  inputField.value = "";

  button.disabled = true;
});

inputField.addEventListener("input", (event) => {
  const value = event.target.value;
  button.disabled = value === "";
});

async function main() {
  await botAnswer();
}
