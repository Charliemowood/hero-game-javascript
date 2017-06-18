var assert = require('assert');
var Task = require('../task.js')

var task;


describe('Task', function() {

  beforeEach(function () {
    task = new Task(1, 1, 1);
  });

  it('should have a difficulty', function() {
    assert.strictEqual(1, task.difficulty)
  });

  it('should have an urgency', function() {
    assert.strictEqual(1, task.urgency)
  });

  it('should have a reward', function() {
    assert.strictEqual(1, task.reward)
  });

  xit('should be able to mark a task completed', function() {
    assert.strictEqual(true. task.complete());
  });





});
