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
    var hue = 360*i/n;
    var color0 = HSVtoCs(hue,0.9,0.9);
    var color1 = HSVtoCs(hue,0.1,0.9);
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
  if (myworld.ants.some(function(x){return x.isalive;})){
    setTimeout("mainLoop(myworld)",10);
  } else {
    document.getElementById("end").innerHTML = "Stopped."
  }
}

function clearGarden(){
  var garden = document.getElementById("garden");
  garden.width = garden.width;
  document.getElementById("end").innerHTML = "..."
}

function startAnt(){
  clearGarden();
  var n = parseInt(document.getElementById("nofants").value);
  myworld = new World(document.getElementById("garden"), 2);
  myworld.createAnts(n);
  mainLoop(myworld);
}

function HSVtoCs(h, s, v) {
  var r, g, b, i, f, p, q, t;
  h = h/360;
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }
  return "rgb(" +
    [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)].toString()
  + ")";
}
//window.onload = init
