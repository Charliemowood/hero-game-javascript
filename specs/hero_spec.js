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

  it('hero should be able to say their name', function() {
    assert.strictEqual("My name is Garry", hero.talk());
  });

  it('hero should have a collection of tasks to complete', function() {
    assert.deepEqual([], hero.collectionOfTasks)
  });

  xit('hero should be able to eat food, and health should go up by the replenishment value', function() {
  });

  xit('When the hero eats food if it is their favourite food, their health should go up by 1.5 * value', function() {
  });

  xit('Hero should be able to sort their tasks by difficulty, urgency or reward', function() {
  });

  xit('A hero should be able to view tasks that are marked as completed or incomplete', function() {

  });




});
