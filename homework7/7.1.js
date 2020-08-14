const origin = {
  name: "Vika",
  favouriteColor: "pink",
  favouritePlace: "Barcelona, Spain",
  role: { name: "Student", id: 1 },
};
const target = {};
function copy(obj1, obj) {
  for (const key in obj) {
    const value = obj[key];
    obj1[key] = value;
  }

  return obj1;
}

copy(target, origin);
console.log(origin, target, origin === target, origin.role === target.role);
