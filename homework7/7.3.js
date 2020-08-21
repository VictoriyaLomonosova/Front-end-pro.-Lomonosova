let obj = {};
const str = "aaabbc";

function calc(str) {
  for (let i = 0; i < str.length; i++) {
    let l = str[i];
    obj[l] = obj[l] + 1 || 1;
  }
  return obj;
}

console.log(calc(str));
