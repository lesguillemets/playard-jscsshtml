var citysize = 5; // show cities as 5*5 [px*px] square.
function Simulator(){
  this.c = document.getElementById("c").value; // number of cities
  this.n = document.getElementById("n").value; // size of the population
  this.m = document.getElementById("m").value; // pairs make child
  this.p = document.getElementById("p").value; // mutation probability
  this.g = document.getElementById("g").value; // how many years?
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

Simulator.prototype.generateCities = function(){
  for (var n=0; n<this.c; n++){
    this.cities[n] = [
      Math.floor(Math.random()*this.mapWidth),
      Math.floor(Math.random()*this.mapHeight)
    ];
  }
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

// required methods for initialization.

Simulator.prototype.calcTotalDistances = function(){
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

function makeChild(n){
}

function tablehandler(){
  var tbl = document.getElementById("results");
  var newrow = tbl.insertRow(1);
  var c0 = newrow.insertCell(0);
  var c1 = newrow.insertCell(1);
  var c2 = newrow.insertCell(2);
  var c3 = newrow.insertCell(3);
  c0.innerHTML = Math.random();
  c1.innerHTML = Math.random();
  c2.innerHTML = Math.random();
  c3.innerHTML = Math.random();
}

function main(){
  sim = new Simulator();
  sim.drawCities();
}
