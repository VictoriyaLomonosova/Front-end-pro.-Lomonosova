// реализация функции for each
const myArray = [1, 2, 3];
function consoleOut(num) {
  console.log(num);
  return num;
}
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
forEach(myArray, consoleOut);









