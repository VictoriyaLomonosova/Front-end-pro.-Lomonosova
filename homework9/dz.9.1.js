function createCounter() {
 let counter = 0;

  function count(num) {
    return counter += num;
  }

  return count;
}

const result = createCounter();
console.log(result(3));
console.log(result(5));
console.log(result(20));
