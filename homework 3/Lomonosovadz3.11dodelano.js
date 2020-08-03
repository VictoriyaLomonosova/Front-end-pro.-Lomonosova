// Игра "Угадай число"
let value;
let randomNumber = 9;

while (true) {
  value = prompt("Попробуй угадать число от 0 до 10");
  if (Number.isNaN(+value) === true) {
    alert("Нужно ввести число!");
  }
  if (!value) {
    break;
  } else if (+value === randomNumber) {
    alert("Ты угадал(а)! Умница!");
    break;
  } else {
    alert("Не удалось угадать. Попробуй еще.");
  }
}
