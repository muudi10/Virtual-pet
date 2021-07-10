function Pet(name) {
  (this.name = name), (this.age = 0), (this.hunger = 0), (this.fitness = 10)

}

Pet.prototype = {
  get isAlive(){
    if (this.hunger <=0 || this.fitness >= 10 || this.age >= 30){
      return false
    }
    else {
      return true
    }
  }
}
Pet.prototype.growUp = function () {
  this.age++, this.hunger++, (this.fitness = this.fitness - 3);
};
Pet.prototype.walk = function () {
  if (this.fitness + 4 <= 10) {
    this.fitness += 4;
  } else {
    this.fitness = 10;
  }
};

Pet.prototype.feed = function(){
    if ((this.hunger - 3) >= 0 ) {
           this.hunger -=3
    }else {
        this.hunger= 0;
    }
 
    
}


Pet.prototype.checkUp = function(){
    
    if (this.fitness <= 3 && cat.hunger <=5){
        return 'I am Hungry AND I need a walk'
    } if (this.fitness <=3){
        return 'I need a walk'
    } if (this.hunger <= 5){
        return 'I am hungry'
    } else {
        return 'I feel great'
    }
}

const cat = new Pet("muudi");
cat.growUp();
cat.feed()
cat.feed()
console.log(cat.hunger);
cat.growUp();
cat.growUp();
cat.walk();
cat.walk();
cat.walk();
cat.checkUp();

console.log(cat.isAlive)
// console.log(cat.age);
console.log(`cat's humger level is ${cat.hunger}`);
console.log(cat.checkUp());
console.log(cat.fitness);

module.exports = Pet;
