// реализация функции for each
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
forEach([1, 2, 5, 8], function (num, i) {
  console.log("Element: " + num + ", index: " + i);
});







