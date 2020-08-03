// 4 задание
function calc(x, y, action) {
  switch (action) {
    case "+":
      return x + y;

    case "-":
      return x - y;

    case "*":
      return x * y;

    case "/":
      return x / y;

    case "%":
      return x % y;

    case "^":
      return x ** y;

    default:
      return "Это не выполняется";
  }
}
const result = calc(4, 2, "+");
console.log(result);
