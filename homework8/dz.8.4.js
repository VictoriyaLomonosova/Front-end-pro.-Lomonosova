const place1 = {
  name: "Aquapark Koblevo",
  adress: " Street vulytsia Morska, 150, Koblevo",
  price: 600,
  weekends: { official: "Sunday" },
};
const place2 = {
  name: "Aquapark Odessa",
  adress: "Ovidiopolska road, Avangard",
  price: 800,
  weekends: { notofficial: "Monday" },
};

function deepEqual(x, y) {
  if (x === y) return true;

  if (x == null || typeof x !== "object" || y == null || typeof y !== "object")
    return false;

  let keysX = Object.keys(x),
    keysY = Object.keys(y);

  if (keysX.length !== keysY.length) return false;

  for (let key of keysX) {
    if (!keysY.includes(key) || !deepEqual(x[key], y[key])) return false;
  }

  return true;
}
console.log(deepEqual(place1, place2));
