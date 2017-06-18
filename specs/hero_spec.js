var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');

describe('Hero', function() {

  var hero;
  var food;
  var food1;
  var task1;
  var task2;
  var task3;

  beforeEach(function() {
    hero = new Hero("Garry", "Banana");
    food = new Food("Banana", 10);
    food1 = new Food("Chocolate", 10);
    task1 = new Task(1, 1, 1);
    task2 = new Task(2, 2, 2);
    task3 = new Task(3, 3, 3);
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

  it('Hero should be able to add task', function() {
    hero.add(task1);
    hero.add(task2);
    hero.add(task3);
    assert.strictEqual(3, hero.collectionOfTasks.length);
  });

  xit('Hero should be able to sort their tasks by difficulty, urgency or reward', function() {
    hero.order
  });


  xit('A hero should be able to view tasks that are marked as completed or incomplete', function() {

  });




});
