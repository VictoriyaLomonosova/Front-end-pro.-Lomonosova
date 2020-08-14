const place1 = {
  name: "Aquapark Koblevo",
  adress: " Street vulytsia Morska, 150, Koblevo",
  price: 600,
};
const place2 = {
  name: "Aquapark Odessa",
  adress: "Ovidiopolska road, Avangard",
  price: 800,
};
function compareObj(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}
const result = compareObj(place1, place2);
console.log(result);
