var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js')

describe('Hero', function() {

  var hero;
  var food;

  beforeEach(function() {
    hero = new Hero("Garry", "Banana");
    food = new Food("Banana", 10);
    food1 = new Food("Chocolate", 10);
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

  it('hero should be able to eat food, and health should go up by the replenishment value', function() {
    hero.eat(food1);
    assert.strictEqual(110, hero.health);
  });

  it('When the hero eats food if it is their favourite food, their health should go up by 1.5 * value', function() {
    hero.eat(food);
    assert.strictEqual(115, hero.health)
  });

  xit('Hero should be able to sort their tasks by difficulty, urgency or reward', function() {
  });

  xit('A hero should be able to view tasks that are marked as completed or incomplete', function() {

  });




});
