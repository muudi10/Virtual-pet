"use strict";

var pet = require('../src/pet');

describe('constructor', function () {
  it('returns an object', function () {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
});