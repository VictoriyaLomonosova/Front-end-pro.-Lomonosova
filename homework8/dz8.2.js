function getSymbolIndex(str, symbol) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == symbol) {
      return i;
    } else {
    }
  }

  return -1;
}

console.log(getSymbolIndex("hello lol", "h"));
console.log(getSymbolIndex("hello lol", "l"));
console.log(getSymbolIndex("hello lol", "v"));
