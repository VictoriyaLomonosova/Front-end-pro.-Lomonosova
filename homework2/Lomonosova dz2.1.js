
// 1 задание
 let name = prompt("Как тебя зовут?"),
 yearofbirth = +prompt("Укажите свой год рождения");
if (Number.isNaN(yearofbirth )===true) {
 alert("Надо только цифрами");
}
let yearofbirthModified = 2020 - Number(yearofbirth);
alert(`Привет, ${name}` + ` ${yearofbirthModified}`);

 