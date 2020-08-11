// реализация функции some
const array = [1, 2, 3, 4];

function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
}
const Even = some(array, function (elem) {
  return elem % 2 === 0;
});
console.log(Even)