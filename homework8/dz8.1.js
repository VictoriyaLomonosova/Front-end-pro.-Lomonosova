function isSymbolPresentInString(str, symbol) {
  for (let i = 0; i < str.length; i++) if (str[i] === symbol) return true;

  return false;
}

console.log(isSymbolPresentInString("abc", "a"));
