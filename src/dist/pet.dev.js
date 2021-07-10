"use strict";

function Pet(name) {
  this.name = name, this.age = 0, this.hunger = 0, this.fitness = 10;
}

Pet.prototype.growUp = function () {
  this.age++, this.hunger++, this.fitness = this.fitness - 3;
};

Pet.prototype.walk = function () {
  this.fitness = this.fitness + 4;
};

var cat = new Pet("muudi");
cat.growUp();
cat.growUp();
console.log(cat.age);
console.log(cat.hunger);
module.exports = Pet;