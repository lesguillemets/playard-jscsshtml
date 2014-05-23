var citysize = 5; // show cities as 5*5 [px*px] square.
var showEvery = 50;  // show infos every 50 generations.

function Simulator(){
  // essentially:
  // { c::Int, n::Int, m::Int, p::Floating, g::Int, canv::Canvas}
  this.c = document.getElementById("c").value; // number of cities
  this.n = document.getElementById("n").value; // size of the population
  this.m = document.getElementById("m").value; // pairs make child
  this.p = document.getElementById("p").value; // mutation probability
  this.g = document.getElementById("g").value; // how many years?
  this.showFlag = 0;
  this.gen = 0;
  this.canv = document.getElementById("path");
  this.ctx = this.canv.getContext("2d");
  this.mapWidth = this.canv.width;
  this.mapHeight = this.canv.height;
  this.cities = new Array(this.c); // c City objects.
  this.generateCities();
  this.distances = new Array(this.c);
  for (var i=0; i<this.c; i++){
    this.distances[i] = new Array(this.c); // c*c numbers.
    // TODO : make this c*c/2?
  }
  this.makeDistMatrix();
  this.population = new Array();
  this.generateFirstGen();
  // first n members, then n+2*m after gaining child,
  // evaluate, and then n again after selection.
}

// required methods for initialization.

Simulator.prototype.generateCities = function(){
  for (var n=0; n<this.c; n++){
    this.cities[n] = [
      Math.floor(Math.random()*this.mapWidth),
      Math.floor(Math.random()*this.mapHeight)
    ];
  }
};

Simulator.prototype.makeDistMatrix = function(){
  for (var i=0; i<this.c; i++){
    for(var j=i; j<this.c; j++){
      var dist = calcDist(this.cities[i], this.cities[j]);
      this.distances[i][j] = dist;
      this.distances[j][i] = dist;
    }
  }
};

Simulator.prototype.generateFirstGen = function(){
  for(var i=0; i<this.n; i++){
    this.population[i] = randIndividual(this.c);
  }
};

// main loop.
Simulator.prototype.mainLoop = function(){
  for(this.gen=0; this.gen<this.g; this.gen++){
    this.makeChildren();
    this.applyMutations();
    this.evalIndividuals();
    this.selectNextGen();
    if(! this.showFlag--){
      this.showFlag = showEvery;
      this.pushtoTable();
      this.clearPathCanv();
      this.drawCities();
      this.drawPath(0);
    }
  }
}

// methods required for each step.

Simulator.prototype.makeChildren = function(){
  // when calling this function, this.population.length should be n.
  for(var pair=0; pair<this.m; pair++){
    var papa = this.population[Math.floor(Math.random()*this.n)];
    var mama = this.population[Math.floor(Math.random()*this.n)];
    this.population.push(helloChild(papa,mama));
    this.population.push(helloChild(mama,papa));
  }
};

Simulator.prototype.applyMutations = function(){
  for (var i=0; i<this.population.length; i++){
    if (Math.random() < this.p){
      // add mutation.
      var gene = this.population[i].route;
      var first = gene.splice(0,Math.floor(Math.random()*gene.length));
      var middle = gene.splice(0,Math.floor(Math.random()*gene.length));
      middle.reverse();  // elddim
      middle = middle.concat(gene);  // elddimglast
      gene = first.concat(middle)  // firstelddimglast
      this.population[i].route = gene;
    }
  }
};

Simulator.prototype.evalIndividuals = function(){
  for (var i=0; i<this.population.length; i++){
    var thisguy = this.population[i];
    var totalDist = 0;
    var prevCityNum = thisguy.route[0];
    var crntCityNum = -1;
    for (var cn=1; cn<this.cities.length; cn++){
      crntCityNum = thisguy.route[cn];
      totalDist += this.distances[prevCityNum][crntCityNum];
      prevCityNum = crntCityNum;
    }
    this.population[i].totalDist = totalDist;
    this.population[i].value = 100/(totalDist*totalDist);
  }
  // sort by value descending.
  this.population.sort(function(a,b){return b.value-a.value;});
};

Simulator.prototype.selectNextGen = function(){
  // Simulator.prototype.evalIndividuals sorts this.generation
  // prior to this function.
  // elitism.
  this.population = this.population.slice(0,this.n);
};

// methods required for visualisation.

Simulator.prototype.clearPathCanv = function(){
  this.canv.width = this.canv.width;
};

Simulator.prototype.drawCities = function(){
    this.ctx.fillStyle = "rgb(0,0,0)";
    for (var i=0; i<this.cities.length; i++){
      var city = this.cities[i];
      this.ctx.fillRect(
        city[0]-citysize/2, city[1]-citysize/2,
        citysize,citysize
      );
      //console.log(city);
    }
};

Simulator.prototype.drawPath = function(invn){
  // Int (individual's number s.t. this.population[i] is him
  // -> IO()
  this.ctx.fillStyle = "#00FF99";
  var path = this.population[invn].route;
  var city = this.cities[path[0]]
  this.ctx.moveTo(city[0],city[1]);
  for (var cityn=1; cityn<path.length;cityn++){
    city = this.cities[path[cityn]]
    this.ctx.lineTo(city[0],city[1]);
  }
  this.ctx.stroke();
};

Simulator.prototype.drawGraph = function () {
}

Simulator.prototype.pushtoTable = function(){
  var tbl = document.getElementById("results");
  var newrow = tbl.insertRow(1);
  var c0 = newrow.insertCell(0);
  var c1 = newrow.insertCell(1);
  var c2 = newrow.insertCell(2);
  var c3 = newrow.insertCell(3);
  c0.innerHTML = this.gen;
  c1.innerHTML = this.population[0].totalDist;
  c2.innerHTML = this.population[this.n-1].totalDist;
  c3.innerHTML = "None";
};

function Individual(route){
  this.route = route;
  this.totalDist = 0;
  this.value = 0;
}

function calcDist(city1, city2){
  // :: (Num t) => City -> City -> t
  var deltaX = city1[0] - city2[0];
  var deltaY = city1[1] - city2[1];
  return Math.sqrt(deltaX*deltaX + deltaY*deltaY);
}

function randIndividual(n){
  // :: Int -> Individual where n is the number of cities.
  var stack = [];
  var randomPerm = [];
  for (var i=0; i<n; i++){
    stack[i] = i;
  }
  var remaining = n;
  while(remaining>0){
    var index = Math.floor(Math.random()*remaining);
    randomPerm.push(stack.splice(index,1)[0]);
    remaining--;
  }
  return new Individual(randomPerm);
}

function helloChild(papa,mama){
  var crossloc = Math.floor(Math.random()*papa.route.length);
  var nextgene = papa.route.slice(0,crossloc);
  var lowerhalf = papa.route.slice(crossloc);
  lowerhalf.sort(
    function(a,b){return mama.route.indexOf(a)-mama.route.indexOf(b)}
  );
  nextgene = nextgene.concat(lowerhalf);
  return new Individual(nextgene);
}

function main(){
  sim = new Simulator();
  sim.drawCities();
  sim.mainLoop();
}
