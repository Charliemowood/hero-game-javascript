var assert = require('assert');
var Task = require('../task.js')


describe('Task', function() {

  var task;

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

  it('task should start off not completed', function() {
    assert.strictEqual(false, task.completeStatus)
  });

  it('should be able to mark a task completed', function() {
    task.complete()
    assert.strictEqual(true, task.completeStatus);
  });





});
