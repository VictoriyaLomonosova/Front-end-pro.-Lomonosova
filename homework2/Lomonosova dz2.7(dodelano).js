//7
let username = prompt("Как тебя зовут?");
let userage = +prompt("Cколько тебе лет?");
let isAlcochol = confirm("Алкоголь употребляем?");
if (Number.isNaN(userage) === true) {
  alert("Не число");
} else if (isAlcochol === true && userage > 40) {
  alert("Не злоупотребляйте");
} else if (isAlcochol === true && userage < 18) {
  alert("Ты что?!Маме расскажу");
} else if (isAlcochol === true && userage >= 18 && userage <= 40) {
  alert("Только водку с пивом не мешай");
} else {
  alert("Так,держать!");
}
