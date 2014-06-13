window.onload = init;

var barnsley;
var transformations = [
      [0.85 , 0.04 , -0.04, 0.85, 0, 1.6],
      [0.2  , -0.26, 0.23 , 0.22, 0, 1.6],
      [-0.15, 0.28 , 0.26 , 0.24, 0, 0.44],
      [0    , 0    , 0    , 0.16, 0, 0  ]
];
var numberofDots = 300000;
var color = "rgb(0,255,89)";
var canvas;

var probs = [0.85, 0.07, 0.07, 0.01];

function init(){
  for (var i=0; i<transformations.length; i++){
    for (var j=0; j<transformations[i].length; j++){
      var v = document.getElementById("var"+ i + j);
      v.value = transformations[i][j];
    }
  }
  canvas = document.getElementById("fern")
  barnsley = new Barnsley(transformations, probs, [0,0], canvas, color);
  document.getElementById("setrecalc").onclick = setRecalc;
  run();
}

function run(){
  barnsley.draw(numberofDots);
}

function Barnsley(transformations, probs, startPoint, canvas, color){
  // transformations : [[a,b,c,d,e,f]]
  // probs : [p0, p1, ..] ( tsf.length == probs.length, Sum(pi) == 1)
  // startPoint : [x0,y0]
  this.transformations = transformations.slice();
  this.probs = new Array(probs.length);
  this.probs[0] = probs[0];
  for (var i=1; i<probs.length; i++){
    this.probs[i] = this.probs[i-1]+probs[i];
  }
  this.curPoint = startPoint.slice();
  this.points = new Array();
  this.points.push(this.curPoint);
  this.canvas = canvas;
  this.width = canvas.width;
  this.height = canvas.height;
  this.ctx = this.canvas.getContext("2d");
  this.ctx.fillStyle = color;
}

Barnsley.prototype.draw = function(n){
  // for n=100000, takes about 30 ms to calc.
  // takes additional 60 ms to render.
  // using off-screen renderer does not change the time.
  this.points = new Array();
  this.ctx.clearRect(0,0,this.width,this.height);
  for (var i=0; i<n; i++){
    var transf = this.selectRandomTransformation();
    var nextX = transf[0]*this.curPoint[0] + transf[1]*this.curPoint[1];
    var nextY = transf[2]*this.curPoint[0] + transf[3]*this.curPoint[1];
    nextX += transf[4];
    nextY += transf[5];
    this.ctx.fillRect(nextX*this.width/10+this.width/2,nextY*this.height/10,1,1);
    this.curPoint = [nextX, nextY];
    this.points.push(this.curPoint);
  }
}

Barnsley.prototype.selectRandomTransformation = function(){
  var r = Math.random();
  for(var i=0; i<this.probs.length; i++){
    if (r <= this.probs[i]){
      return this.transformations[i];
    }
  }
}

function setRecalc(){
  for (var i=0; i<transformations.length; i++){
    for (var j=0; j<transformations[i].length; j++){
      barnsley.transformations[i][j] =
        parseFloat(document.getElementById('var' + i + j).value);
    }
  }
  barnsley.draw(numberofDots);
}
