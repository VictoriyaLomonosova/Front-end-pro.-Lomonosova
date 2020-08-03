//9 Все делители числа
let b = 20;
for (let i = 1; i <= b; i++) {
  if (b % i === 0) {
    console.log(i);
  }
}

// Четные делители
let p = 20;
let d = 0;
for (let i = 1; i <= p; ) {
  if (p % i == 0) {
    if (i % 2 == 0) d++;
  }
  i++;
}
console.log(`Количество четных делителей:${d}`);

// Сумма четных делителей
let sum = 0;
let k = 20;
for (let i = 1; i <= k; i++) {
  if (k % i == 0 && i % 2 == 0) {
    sum = sum + i;
  }
}
console.log(sum);
