//4 задание
let v = 12345;
v = 69783;
let order =
  (v - (v % 10000)) / 10000 +
  " " +
  (((v - (v % 1000)) / 1000) % 10) +
  " " +
  (((v - (v % 100)) / 100) % 10) +
  " " +
  (((v - (v % 10)) / 10) % 10) +
  " " +
  (v % 10);

console.log(order);
