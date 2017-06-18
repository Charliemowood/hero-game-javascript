var assert = require('assert');
var Food = require('../food.js');

describe('Food', function() {

  var food;

  beforeEach(function() {
    food = new Food("Banana", 10);
  });

  it('food should have a name', function() {
    assert.strictEqual("Banana", food.name);
  });

  it('food should have a replenishment value', function() {
    assert.strictEqual(10, food.replenishValue);
  });
});
