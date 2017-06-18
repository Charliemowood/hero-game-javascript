var Hero = function (name, food) {
  this.name = name;
  this.health = 100;
  this.favorite = food;
  this.collectionOfTasks = [];
}

Hero.prototype =  {
  talk: function() {
    return "My name is " + this.name;
  },
  eat: function(food) {
    this.health += food.replenishValue;
  }
}



module.exports = Hero;
