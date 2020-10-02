class Unit {
  constructor(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
    return;
  }

  isReadyToMove(distance) {
    if (distance == this.maxDistance) {
      return true;
    }
    return false;
  }

  isReadyToFight(distance) {
    if (distance >= this.maxHealth / 2) {
      return true;
    }
    return false;
  }

  restore() {
    return (this.health =
      this.health < this.maxHealth ? this.maxHealth : this.health);
  }

  clone() {
    return Object.assign({}, this);
  }
}

class Army {
  constructor(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
  }

  isReadyToMove(distance) {
    return this.units.every((unit) => unit.isReadyToMove(distance));
  }

  isReadyToFight(distance) {
    return this.units.every((unit) => unit.isReadyToFight(distance));
  }

  restore() {
    for (const unit of this.units) unit.restore();
  }

  getReadyToMoveUnits(distance) {
    return this.units.filter((unit) => unit.isReadyToMove(distance));
  }

  combineUnits(defaultUnits) {
    this.units = this.units.concat(defaultUnits);

    return this.units;
  }

  clone(unitIndex) {
    const unit = this.units[unitIndex];
    return unit !== undefined ? unit.clone() : undefined;
  }
}
const unit1 = new Unit("soldier", 80, 100, 5000);
const unit2 = new Unit("colonel", 60, 100, 4000);
const unit3 = new Unit("captain", 60, 100, 6000);
const defaultUnits = [
  new Unit("officer", 70, 100, 5000),
  new Unit("major", 60, 100, 4000),
  new Unit("lieutenant", 90, 100, 6000),
];

const army = new Army(defaultUnits);
console.log(army);
army.combineUnits([unit1, unit2, unit3]);
console.log(unit1.isReadyToMove(5000));
console.log(unit2.isReadyToMove(4000));
console.log(unit3.isReadyToMove(6000));
console.log(unit1.restore());
console.log(unit1.isReadyToFight(70));
unit2.isReadyToMove(1000);
unit2.isReadyToFight(20);

console.log(army.isReadyToFight(100));
console.log(army.getReadyToMoveUnits(6000));
console.log(army.clone([3]));
