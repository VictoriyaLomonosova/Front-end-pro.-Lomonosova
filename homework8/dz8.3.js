function getNumberOfEven(n) {
  let count = 0;
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) count++;
  }
  return count;
}

console.log(getNumberOfEven(223344));
console.log(getNumberOfEven(111));
