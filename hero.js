var Hero = function (name, food) {
  this.name = name;
  this.health = 100;
  this.favorite = food;
  this.collectionOfTasks = [];
}

Hero.prototype =  {
  talk: function() {
    return "My name is " + this.name;
  }
}



module.exports = Hero;
