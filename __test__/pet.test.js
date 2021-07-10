const Pet = require('../src/pet');
const pet = require('../src/pet')


describe('constructor', () => {
    it('returns an object', () => {
      expect(new pet('cat')).toBeInstanceOf(Object);
        
    });
  });

  describe('growUp',()=>{
     it('ages the pet by one year',() => {
       const cat = new pet('muudi')

      cat.growUp()
       expect(cat.age).toEqual(1)
       expect(cat.hunger).toEqual(1)
       expect(cat.fitness).toEqual(7)
     });

  })

  describe ('Walking',() => {

    xit('increase the level of the fitness',()=> {
      const cat = new Pet('fido')
      cat.fitness =2;
           cat.walk()

      expect(cat.fitness).toEqual(10)
    })
  })

  describe('checkUp',()=> {

    it('check for the state of the pet',()=> {
      const cat = new Pet('muudi');
      cat.fitness = 3;
      cat.hunger= 5;
      
      expect(cat.checkUp()).toEqual('I am Hungry AND I need a walk')
    })
  })

