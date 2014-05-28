var gridSize = 5;
var width;
var height;
var canvas;
var ctx;
var myFighter;

function init(){
  var el = document.getElementById("world");
  el.onkeypress = control;
  canvas = document.getElementById("world");
  ctx = canvas.getContext("2d");
  width = ctx.width;
  height = ctx.height;
  myFighter = new Fighter(200,200,1);
  myFighter.drawMe(ctx);
}

function control(e){
  var direction;
  switch (e.key){
    case "Up":
    case "w":
      var direction = 0;
      myFighter.y -=gridSize;
      break;
    case "Down":
    case "s":
      var direction = 2;
      myFighter.y +=gridSize;
      break;
    case "Left":
    case "a":
      var direction = 3;
      myFighter.x-=gridSize;
      break;
    case "Right":
    case "d":
      var direction = 1;
      myFighter.x+=gridSize;
      break;
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
  var halfWidth = gridSize/2
  context.moveTo(x-halfWidth, y-3*halfWidth);
  context.lineTo(x+halfWidth, y-3*halfWidth);
  context.lineTo(x+halfWidth, y-halfWidth);
  context.lineTo(x+3*halfWidth, y-halfWidth);
  context.lineTo(x+3*halfWidth, y+halfWidth);
  context.lineTo(x-3*halfWidth, y+halfWidth);
  context.lineTo(x-3*halfWidth, y-halfWidth);
  context.lineTo(x-halfWidth, y-halfWidth);
  context.moveTo(x-halfWidth, y-3*halfWidth);
  context.closePath();
  context.fill();
};

window.onload = init;
