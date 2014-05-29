var gridSize = 5;
var width;
var height;
var canvas;
var ctx;
var myFighter;
var fires = [];

var unitVectors = [
  [0,-1], // Up
  [1,0], // Right
  [0,1], // Down
  [-1,0]
];


function init(){
  var el = document.getElementById("world");
  el.onkeypress = control;
  canvas = document.getElementById("world");
  ctx = canvas.getContext("2d");
  width = ctx.width;
  height = ctx.height;
  myFighter = new Fighter(200,200,0);
  myFighter.drawMe(ctx);
  timer = window.setInterval(fireStep,100);
}

function control(e){
  console.log(e);
  var direction;
  var arrowPressed = true;
  switch (e.key){
    case "Up":
    case "w":
      var direction = 0;
      break;
    case "Right":
    case "d":
      var direction = 1;
      break;
    case "Down":
    case "s":
      var direction = 2;
      break;
    case "Left":
    case "a":
      var direction = 3;
      break;
    case " ":
      fires.push(new Fire(
      myFighter.x+unitVectors[myFighter.direction][0]*gridSize,
      myFighter.y+unitVectors[myFighter.direction][1]*gridSize,
      myFighter.direction));
      arrowPressed = false;
    default:
      arrowPressed = false;
  }
  if (arrowPressed){
    if (direction === myFighter.direction){
      myFighter.x += unitVectors[direction][0]*gridSize;
      myFighter.y += unitVectors[direction][1]*gridSize;
    }
    else {
      myFighter.direction = direction;
    }
  }
  refleshCanv(canvas);
  myFighter.drawMe(ctx);
}

function refleshCanv(canv){
  canv.width = canv.width;
}

function Fighter(x,y,direction){
  this.x = x;
  this.y = y;
  this.direction = direction;
}

Fighter.prototype.drawMe = function(context){
  var x = this.x;
  var y = this.y;
  var direction = this.direction;
  drawGrid(x,y,ctx);
  for (var i=0; i<3;i++){
    var v = unitVectors[(direction+[0,1,3][i])%4];
    drawGrid(x+v[0]*gridSize, y+v[1]*gridSize,ctx);
  }
};

function Fire(x,y,direction){
  console.log("Fire");
  this.x = x;
  this.y = y;
  this.direction=direction;
}

Fire.prototype.move = function(){
  this.x += unitVectors[this.direction][0]*gridSize
  this.y += unitVectors[this.direction][1]*gridSize
}

Fire.prototype.move = function(){
  this.x += unitVectors[this.direction][0]*gridSize
  this.y += unitVectors[this.direction][1]*gridSize
}

Fire.prototype.show = function(){
  ctx.fillStyle="rgb(0,200,120)";
  drawGrid(this.x,this.y, ctx);
  ctx.fillStyle="black";
}

function drawGrid(x,y,context){
  context.fillRect(x,y,gridSize,gridSize);
}

function fireStep(){
  refleshCanv(canvas);
  for (var i=0; i<fires.length; i++){
    fires[i].show();
    fires[i].move();
  }
  myFighter.drawMe();
}

window.onload = init;
