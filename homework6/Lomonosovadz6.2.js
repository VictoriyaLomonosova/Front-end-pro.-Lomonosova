// реализация функции map

const array = [1, 2, 3, 4];

function map(arr, callback) {
  const array1 = [];
  for (let i = 0; i < arr.length; i++) {
    array1.push(callback(arr[i]));
  }
  return array1;
}
const multiply = map(array, function (elem) {
  return elem * 2;
});
console.log(multiply);