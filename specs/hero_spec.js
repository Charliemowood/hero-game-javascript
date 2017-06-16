var assert = require('assert');
var Hero = require('../hero.js');

describe('Hero', function() {

  var hero;



  beforeEach(function() {
    hero = new Hero("Garry", "Banana");
  });

  it('hero should have a name', function() {
    assert.strictEqual("Garry", hero.name);
  });

  it('hero should have health', function() {
    assert.strictEqual(100, hero.health);
  });

  it('hero should have favorite food', function() {
    assert.strictEqual("Banana", hero.favorite)
  });

  xit('hero should have a collection of tasks to complete', function() {
    assert.strictEqual([], hero.collectionOfTasks)
  });



});
