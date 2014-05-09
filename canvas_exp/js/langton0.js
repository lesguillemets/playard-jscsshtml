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
    var cbase = 255*i/n;
    var color0 = "rgb(100," + cbase.toString() + ","+
      (255-cbase).toString() + ")";
    var color1 = "rgb(200," + (Math.max(cbase+50,256)).toString() + ","+
      (Math.max(305-cbase,256)).toString() + ")";
    var x = Math.floor(Math.random() * this.w);
    var y = Math.floor(Math.random() * this.h);
    var drc = Math.floor(Math.random() * 4);
    this.ants.push(new Ant(x,y,drc,color0,color1));
    //console.log(this.ants[this.ants.length-1].toString());
  }
};

World.prototype.moveAnts = function(){
  this.steps ++;
  document.getElementById("steps").innerHTML = "STEP : " + this.steps;
  for (i=0;i<this.ants.length;i++){
    var ant = this.ants[i];
    if (ant.isalive){
      var vect = ant.drcs[ant.drc];
      // paint current position
      if (!!this.grid[ant.x][ant.y]){
        this.cnt.fillStyle = ant.color0;
      } else {
        this.cnt.fillStyle = ant.color1;
      }
      this.cnt.fillRect(
        ant.x*this.dotsize,ant.y*this.dotsize, this.dotsize, this.dotsize);
      // move
      ant.x += vect[0];
      ant.y += vect[1];
      var x = ant.x;
      var y = ant.y;
      // die if gone too far
      if ( x < 0 || x >= this.w ||  y <= 0 || y >= this.h) {
        ant.isalive = false;
        continue;
      }
      // and turn
      if (!!this.grid[x][y]){
        ant.drc = ++ant.drc%4;
      } else {
        ant.drc = (ant.drc - 1 + 4)%4;
      }
      // then mark the field
      this.grid[x][y] = !this.grid[x][y]
      // and show (current position shown in ccolor)
      this.cnt.fillStyle = ant.ccolor;
      this.cnt.fillRect(
        x*this.dotsize,y*this.dotsize, this.dotsize, this.dotsize);
    }
  }
};

function Ant(x,y,drc,color0,color1){
  this.x = x;
  this.y = y;
  this.drc = drc; // drc: 0 (up) 1 (right) 2 (down) 3 (right)
  this.color0 = color0; // some object that can be set to cnt.fillStyle
  this.color1 = color1; // for "visited but off"
  this.isalive = true;
}

Ant.prototype.drcs = [[0,1],[1,0],[0,-1],[-1,0]];

Ant.prototype.toString = function(){
  return ("Ant at " + this.x + ", " + this.y + " heading " + this.drc
  + " with colour: " + this.color);
};

Ant.prototype.ccolor = "rgb(0,0,0)";


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
