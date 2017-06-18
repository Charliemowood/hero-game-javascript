var Task = function (difficulty, urgency, reward) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completeStatus = false;
}

module.exports = Task;
