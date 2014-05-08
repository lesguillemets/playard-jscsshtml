function World(world, dotsize){
  this.dotsize = dotsize;
  this.w = world.width/dotsize;
  this.h = world.height/dotsize;
  this.grid = new Array();
  for (var i=0; i<this.w; i++){
    this.grid.push(new Array(this.h));
  }
  this.world = world; // dom element.
  this.ants = new Array();
  this.cnt = this.world.getContext("2d");
  this.steps = 0;
}

World.prototype.createAnts = function(n){
  for (var i=0; i<n; i++){
    var color = "rgba(100," + (255*i/n).toString() + ","+
      (255-255*i/n).toString() + ",0.8)";
    var x = Math.floor(Math.random() * this.w);
    var y = Math.floor(Math.random() * this.h);
    var drc = Math.floor(Math.random() * 4);
    this.ants.push(new Ant(x,y,drc,color));
    //console.log(this.ants[this.ants.length-1].toString());
  }
};

World.prototype.moveAnts = function(){
  this.steps ++;
  document.getElementById("steps").innerHTML = "STEP : " + this.steps;
  for (i=0;i<this.ants.length;i++){
    var ant = this.ants[i];
    var vect = ant.drcs[ant.drc];
    // move
    ant.x += vect[0];
    ant.y += vect[1];
    var x = ant.x;
    var y = ant.y;
    // and turn
    if (this.grid[x][y]){
      ant.drc = ++ant.drc%4;
    } else {
      ant.drc = (ant.drc - 1 + 4)%4;
    }
    // then mark the field
    this.grid[x][y] = !this.grid[x][y]
    // and show
    this.cnt.fillStyle = ant.color;
    this.cnt.fillRect(
      x*this.dotsize,y*this.dotsize, this.dotsize, this.dotsize);
  }
};

function Ant(x,y,drc,color){
  this.x = x;
  this.y = y;
  this.drc = drc; // drc: 0 (up) 1 (right) 2 (down) 3 (right)
  this.color = color; // some object that can be set to cnt.fillStyle
}

Ant.prototype.drcs = [[0,1],[1,0],[0,-1],[-1,0]];

Ant.prototype.toString = function(){
  return ("Ant at " + this.x + ", " + this.y + " heading " + this.drc
  + " with colour: " + this.color);
};


function init(){
  myworld = new World(document.getElementById("garden"), 2);
  myworld.createAnts(5);
  mainLoop(myworld);
}

function mainLoop(myworld) {
  myworld.moveAnts();
  setTimeout("mainLoop(myworld)",10);
}

window.onload = init
