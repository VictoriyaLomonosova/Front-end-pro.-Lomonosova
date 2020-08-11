// реализация функции filter
const arr = [1, 2, 3, 4];


function filter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
 const Even = filter (arr, function (elem) {
  return elem % 2 === 0;
});
console.log(Even)