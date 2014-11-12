window.addEventListener("load", init);
var game;
var ticksPerSec = 2;

function init(){
  game = new Game();
  var sapia = new People(
    "sapia", 2, new Status()
  );
  game.addPeople(sapia);
  game.init();
  function mainLoop(){
    setTimeout(
      function(){
        game.tick();
        requestAnimationFrame(mainLoop);
      },
      1000/ticksPerSec);
  }
  mainLoop();
}


function Game(){
  this.peoples = {};
}

Game.prototype.addPeople = function(p){
  this.peoples[p.name] = p;
};

Game.prototype.click = function(){
  this.peoples.sapia.population += 1;
  this.show();
};

Game.prototype.init = function(){
  var self = this;
  document.getElementById('click').addEventListener(
    'click', function(){self.click();}
  );
};

Game.prototype.start = function(){
  this.mainLoop();
};

Game.prototype.mainLoop = function(){
};

Game.prototype.tick = function(){
  this.show();
  this.peoples.sapia.buffer += 1/3;
  var newlyGen = Math.floor(this.peoples.sapia.buffer);
  this.peoples.sapia.population += newlyGen;
  this.peoples.sapia.buffer -= newlyGen;
};

Game.prototype.show = function(){
  document.getElementById("sapia-population").innerHTML = 
    this.peoples.sapia.population;
};
  

function People(name, population, status){
  this.name = name;
  this.population = population;
  this.buffer = 0;
  this.status = status;
}

function Status(){
}
