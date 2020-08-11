// every
const array = [2, 6, 8, 4];
function isEven(num) {
  console.log(num % 2 === 0);
  return num;
}

function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
}
every(array, isEven)
