function Pet(name) {
  (this.name = name),
    (this.age = 25),
    (this.hunger = 0),
    (this.fitness = 10),
    this.children=[]

}

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
};
Pet.prototype.growUp = function () {
  this.age++, this.hunger++, (this.fitness = this.fitness - 3);
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  if (this.fitness + 4 <= 10) {
    this.fitness += 4;
  } else {
    this.fitness = 10;
  }
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  if (this.hunger - 3 >= 0) {
    this.hunger -= 3;
  } else {
    this.hunger = 0;
  }
};

Pet.prototype.checkUp = function () {
  if (this.fitness <= 3 && cat.hunger <= 5) {
    return "I am Hungry AND I need a walk";
  }
  if (this.fitness <= 3) {
    return "I need a walk";
  }
  if (this.hunger <= 5) {
    return "I am hungry";
  } else {
    return "I feel great";
  }
};

Pet.prototype.adoptAchild =function(child){
 this.children= [child];
}


const cat = new Pet("muudi");

const parent = new Pet("Amelia");
const child = new Pet("dave");


parent.adoptAchild(child);
parent.adoptAchild(child);

console.log(parent.children);

// cat.growUp();
// cat.growUp();
// cat.growUp();
// cat.growUp();
// cat.growUp();
// cat.walk();

// console.log(cat.isAlive);
// console.log(`cat's age is ${cat.age}`);
// console.log(`cat's humger level is ${cat.hunger}`);
// console.log(cat.checkUp());
// console.log(`cat's fitless level is${cat.fitness}`);

module.exports = Pet;
