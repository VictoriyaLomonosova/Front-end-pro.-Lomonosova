// every
const array = [1, 2, 4, 4];

function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
}
const Even = every(array, function (elem) {
  return elem % 2 === 0;
});
console.log(Even);
