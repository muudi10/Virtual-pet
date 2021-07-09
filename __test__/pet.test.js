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
     });
  })


