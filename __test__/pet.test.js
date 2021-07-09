const pet = require('../src/pet')


describe('constructor', () => {
    it('returns an object', () => {
      expect(new pet('Fido')).toBeInstanceOf(Object);
    });
  });


