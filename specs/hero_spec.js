var assert = require('assert');
var Hero = require('../hero.js');

describe('Hero', function() {

  var hero;



  beforeEach(function() {
    hero = new Hero("Garry");
  });

  it('hero should have a name', function() {
    assert.strictEqual("Garry", hero.name);
  });
});
