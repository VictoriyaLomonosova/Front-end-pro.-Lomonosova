const obj = {};

const str = "aaabbbbcc";

function calc(str) {
  for (let i = 0; i < str.length; i++) {
    let l = str[i];
    obj[l] = isNaN(obj[l]) ? 1 : obj[l] + 1;
  }
  return obj;
}
console.log(calc(str));
