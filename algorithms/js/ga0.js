var citysize = 5; // show cities as 5*5 [px*px] square.
function Simulator(){
  this.c = document.getElementById("c").value; // number of cities
  this.n = document.getElementById("n").value; // size of the population
  this.m = document.getElementById("m").value; // pairs make child
  this.p = document.getElementById("p").value; // mutation probability
  this.g = document.getElementById("g").value; // how many years?
  this.canv = document.getElementById("path");
  this.ctx = this.canv.getContext("2d");
  this.mapwidth = 500;
  this.mapheight = 500;
  this.cities = new Array(this.c); // c City objects.
  this.generateCities();
  this.distances = new Array(this.c);
  for (var i=0; i<this.c; i++){
    this.distances[i] = new Array(this.c); // c*c numbers.
    // TODO : make this c*c/2?
  }
  this.population = new Array();
  // first n members, then n+2*m after gaining child,
  // evaluate, and then n again after selection.
}

Simulator.prototype.generateCities = function(){
  for (var n=0; n<this.c; n++){
    this.cities[n] = [
      Math.floor(Math.random()*this.mapwidth),
      Math.floor(Math.random()*this.mapheight)
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
      console.log(city);
    }
};

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
