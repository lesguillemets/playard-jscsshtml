/* * One Grid will be drawn like this: {{{
*
* /- . is the (x,y) of the Grid.
*._________
*|        |
*|        |
*|        |
* _________
*
*        gridSize
*              <----------------->
*            _______________________A
*          A __._________________.__| lineWidth
*          | _______________________V
*          | |||||*************|||||
* lineWidth| |||||*************|||||
*          | |||||**Coloured***|||||
*          | |||||*****Inside**|||||
*          | |||||*************|||||
*          | |||||*************|||||
*          | _______________________
*          V __._________________.__
*            _______________________
*            <--->             |||||
*             lineWidth        |||||
*
* So, when painting the grid(x,y),
* you'll have to paint
* starting : (x+(lineWidth/2), y+(lineWidth/2))
* width, height = gridSize - lineWidth
*
* This is tedious, but because of that,
* we won't (hopefully) have to call setGrid() every time.
*  --- That's what I thought.
* I knew it. This works if and only if  lineWidth>=2px,
*  which is unacceptable for regular display.
}}}*/

// global variables {{{
var lineWidth = 1;
var gridSize = 8;
var numberOfStates = 4;
var colors = ["#000000", "#FF0000", "#FF8800", "#FFFF00"];
var currentGrid;
var canvas;
var ctx;
var shooterCanvas;
var shooterCtx;
var borderCanvas;
var borderCtx;
var canvwidth, canvheight;
var width, height;
var running = false;
var borderButton;
var timer;
var mouseState = null;
var mouseLocAsPos;
var isMousePresed = false;
var myShooter;
var unitVectors = [
  [0,-1], // up
  [1,0], // right
  [0,1], // down
  [-1,0] // left
];
var coolingInterval = 2;
//}}}

function init(){
  initialize();
  showGrid();
  showBorder();
  borderCanvas.addEventListener("mousedown", onMousePressed);
  borderCanvas.addEventListener("mouseup", onMouseReleased);
  borderCanvas.addEventListener("mousemove", onMouseMoved);
  borderCanvas.addEventListener("mouseout", onMouseGetOut);
  borderCanvas.addEventListener("touchstart", onTouchOn);
  borderCanvas.addEventListener("touchend", onTouchOff);
  borderCanvas.addEventListener("touchmove", onTouchMoved);
  window.onkeypress = control;
  myShooter = new Shooter(30,30,2);
  myShooter.show();
}

// handles mouse pressing {{{
function onMousePressed(e){
  isMousePresed = true;
  var mousePos = currentCoords(e);
  putColor(mousePos);
}

function onTouchOn(e){
  var touchobj = e.changedTouches[0];
  onMousePressed(touchobj);
  e.preventDefault();
}

function onMouseReleased(e){
  isMousePresed = false;
}
function onTouchOff(e){
  var touchobj = e.changedTouches[0];
  onMouseReleased(touchobj);
  e.preventDefault();
}

function onMouseMoved(e){
  if (isMousePresed){
    var mousePos = currentCoords(e);
    var currentMouseLocAsPos = mousePos.map(
      function(x){return Math.floor(x/gridSize);});
    if (currentMouseLocAsPos !== mouseLocAsPos){
      // if the mouse crossed the border
      mouseLocAsPos = currentMouseLocAsPos;
      putColor(mousePos);
    }
  }
}
function onTouchMoved(e){
  var touchobj = e.changedTouches[0];
  onMouseMoved(touchobj);
  e.preventDefault();
}

function onMouseGetOut(e){
  isMousePressed = false;
}

function putColor(mousePos){
  var posX = Math.floor(mousePos[0] / gridSize);
  var posY = Math.floor(mousePos[1] / gridSize);
  if (mouseState !== null){
    currentGrid[posX][posY] = mouseState;
    showCellAt(posX,posY);
  }
}

function currentCoords(e){
  var rect = e.target.getBoundingClientRect();
  var mouseX = e.clientX - rect.left;
  var mouseY = e.clientY - rect.top;
  return [mouseX,mouseY];
}
// }}}

// keyboard event handlers {{{
function control(e){
  switch (e.charCode){
    // Shooter {{{
    // Movements {{{
    // up (w/k)
    case 119:
    case 107:
      myShooter.move(0);
      break;
    // right (d/l)
    case 100:
    case 108:
      myShooter.move(1);
      break;
    // down (s/j)
    case 115:
    case 106:
      myShooter.move(2);
      break;
    // left (a/h)
    case 97:
    case 104:
      myShooter.move(3);
      break;
    // Up (W/K)
    case 87:
    case 75:
      myShooter.justMove(0);
      break;
    // Right (D/L)
    case 68:
    case 76:
      myShooter.justMove(1);
      break;
    // Down (S/J)
    case 83:
    case 74:
      myShooter.justMove(2);
      break;
    // Left (A/H)
    case 65:
    case 72:
      myShooter.justMove(3);
      break;
    // }}}
    // Shooting {{{
    case 32:  // " "
    case 120: // x
    case 88:  // X
    case 112: // p
    case 80:  // P
      myShooter.shoot();
      break;
    // }}}
    // }}}
  }
}
// }}}

// Main {{{
// conditions {{{
function willSpaun(n){
  return (n === 2);
}

function willSurvive(n){
  return (3<=n && n<=5);
}
// }}}

// initialisation {{{
function initialize(){
  canvas = document.getElementById("world");
  ctx = canvas.getContext("2d");
  shooterCanvas = document.getElementById("shooterCanvas");
  shooterCtx = shooterCanvas.getContext("2d");
  borderCanvas = document.getElementById("borderCanvas");
  borderCtx = borderCanvas.getContext("2d");
  borderButton = document.getElementById("borderButton")
  canvWidth = canvas.width;
  canvHeight = canvas.height;
  width = Math.floor(canvWidth/gridSize);
  height = Math.floor(canvHeight/gridSize);
  currentGrid = new Array(width);
  for (var x=0; x<width; x++){
    currentGrid[x] = new Array(height);
    for (var y=0; y<height; y++){
      currentGrid[x][y] = Math.floor(Math.random()*numberOfStates);//0;
    }
  }
}
// }}}

// display {{{
function showGrid(){
  // when you want to redraw all
  for(var x=1; x<width-1; x++){
    for(var y=1; y<height-1;y++){
      ctx.fillStyle = colors[currentGrid[x][y]];
      ctx.fillRect(x*gridSize, y*gridSize,
                   gridSize, gridSize);
    }
  }
}

function showCellAt(x,y){
  ctx.fillStyle = colors[currentGrid[x][y]];
  ctx.fillRect(x*gridSize, y*gridSize,
               gridSize, gridSize);
}
// }}}

// cellular automata {{{
function updateGrid(){
  var nextGrid = currentGrid.map(
    function(arr){return arr.slice(0);});
  for (var x=1; x<width-1; x++){
    for (var y=1; y<height-1; y++){
      // edge reserved.
      var changed = false;
      var cell = currentGrid[x][y];
      if (cell === 0){
        // if this cell is empty
        var n = countNeighbours(x,y);
        if (willSpaun(n)){
        //console.log("Spaun at" + x + "," + y);
          nextGrid[x][y]++;
          changed = true;
        }
      }
      else if (cell === 1){
        // if this cell is alive and fine
        var n = countNeighbours(x,y);
        if (!willSurvive(n)){
          // ouch!
          nextGrid[x][y]++;
          changed = true;
        }
      }
      else {
        nextGrid[x][y] = (cell+1)%numberOfStates;
        changed = true;
      }
      // draw if changed
      if (changed){
        ctx.fillStyle = colors[nextGrid[x][y]];
        ctx.fillRect(x*gridSize, y*gridSize,
                     gridSize, gridSize);
      }
    }
  }
  currentGrid = nextGrid.slice(0);
}

function countNeighbours(x,y){
  var counter = 0;
  for(var dx=-1; dx<=1; dx++){
    for(var dy=-1; dy<=1; dy++){
      if (currentGrid[x+dx][y+dy] === 1){
        counter ++;
      }
    }
  }
  if (currentGrid[x][y] === 1){
    counter --;
  }
  return counter;
}

function step(){
  updateGrid();
  myShooter.show();
  if (myShooter.coolDownTime !== 0){
    myShooter.coolDownTime--;
  }
}
// }}}

// settings, controls {{{
function toggleStart(){
  if(running){ stopLoop(); }
  else { startLoop(); }
}

function stopLoop(){
  window.clearInterval(timer);
  running = false;
  isBorderShown = true;
  document.getElementById("toggleStart").innerHTML = "Start";
  myShooter.show();
}

function startLoop(){
  timer = window.setInterval(step,100);
  running = true;
  isBorderShown = false;
  document.getElementById("toggleStart").innerHTML = "Stop";
  showGrid();
  myShooter.show();
}

function setColors(){
  for(var stateInd=0; stateInd<numberOfStates; stateInd++){
    var color = document.getElementById("color"+stateInd).value;
    colors[stateInd] = color;
    document.getElementById("state"+stateInd).style.background=color;
  }
  showGrid();
}

function stepForward(){
  if(running){ stopLoop(); }
  step();
}

function reset(){
  if(running){ stopLoop(); }
  initialize();
  showGrid();
}

function clearGrid(){
  if(running){ stopLoop(); }
  for (var x=0; x<width; x++){
    for (var y=0; y<height; y++){
      currentGrid[x][y] = 0;
    }
  }
  canvas.width = canvas.width;
  showGrid();
}

function setMouseState(n){
  n = parseInt(n);
  if (n != mouseState){
    if(mouseState !== null){
      document.getElementById("state"+mouseState).style.borderColor="#FFF";
      document.getElementById("state"+mouseState).innerHTML = ""
    }
    mouseState = n;
    document.getElementById("state"+n).style.borderColor="#aaf";
    document.getElementById("state"+n).innerHTML = "✓"
  }
  else {
    document.getElementById("state"+mouseState).style.borderColor="#FFF";
    document.getElementById("state"+mouseState).innerHTML = ""
    mouseState = null;
  }
}
// }}}
// }}}

// border {{{
function showBorder(){ // {{{
  // call only when you want grid to be shown.
  borderCtx.lineWidth = lineWidth;
  borderCtx.strokeStyle = "rgb(170,170,170)";
  borderCtx.fillstyle = "rgba(0,0,0,0)";
  for (var x=0; x<width*gridSize; x+=gridSize){
    borderCtx.moveTo(x,0);
    borderCtx.lineTo(x,height*gridSize);
  }
  for (var y=0; y<height*gridSize; y+=gridSize){
    borderCtx.moveTo(0,y);
    borderCtx.lineTo(width*gridSize,y);
  }
  borderCtx.stroke();
  borderCtx.lineWidth = 0;
  borderButton.checked = true;
} //}}}

function eraseBorder(){
  borderCanvas.width = borderCanvas.width;
  borderButton.checked = false;
}

function toggleBorder(){
  if (borderButton.checked){
    // currently the border is shown.
    // erase and toggle
    eraseBorder();
  }
  else {showBorder();}
}

function borderButtonClicked(){
  if (borderButton.checked){showBorder();}
  else {eraseBorder();}
}
// }}}

// Shooter {{{
function Shooter(x,y,direction,color){
  // Shooters have square bodies, thus currently
  // (x,y) denotes to the upper-left grid.
  this.x = x;
  this.y = y;
  this.direction = direction; // <- [0,1,2,3]
  this.color0 = "#44FF55";  // front colour
  this.color1 = "#cccccc";  // back colour
  this.coolDownTime = 0
}

Shooter.prototype.show = function(){
  // first clear canvas
  shooterCanvas.width =shooterCanvas.width;
  shooterCtx.fillStyle = this.color0;
  var forward = unitVectors[this.direction];
  var hisright = unitVectors[(this.direction+1)%4];
  shooterCtx.fillRect((this.x)*gridSize,
               (this.y)*gridSize,
               gridSize*2,
               gridSize*2);
  shooterCtx.fillStyle = this.color1;
  switch (this.direction){
    case 0:
      shooterCtx.fillRect((this.x)*gridSize,
                   (this.y+1)*gridSize,
                   gridSize*2,
                   gridSize);
      break;
    case 1:
      shooterCtx.fillRect((this.x)*gridSize,
                   (this.y)*gridSize,
                   gridSize,
                   gridSize*2);
      break;
    case 2:
      shooterCtx.fillRect((this.x)*gridSize,
                   (this.y)*gridSize,
                   gridSize*2,
                   gridSize);
      break;
    case 3:
      shooterCtx.fillRect((this.x+1)*gridSize,
                   (this.y)*gridSize,
                   gridSize,
                   gridSize*2);
      break;
  }
};

Shooter.prototype.shoot = function(){
  if (this.coolDownTime <= 0){
    var x = this.x;
    var y = this.y;
    switch (this.direction){
      case 0:
        for(var dy=0; dy<2; dy++){
          for(var dx=0; dx<2; dx++){
            currentGrid[x+dx][y-1-dy] = 2-dy;
            showCellAt(x+dx,y-1-dy);
          }
        }
        break;
      case 1:
        for(var dy=0; dy<2; dy++){
          for(var dx=0; dx<2; dx++){
            currentGrid[x+2+dx][y+dy] = 2-dx;
            showCellAt(x+2+dx,y+dy);
          }
        }
        break;
      case 2:
        for(var dy=0; dy<2; dy++){
          for(var dx=0; dx<2; dx++){
            currentGrid[x+dx][y+2+dy] = 2-dy;
            showCellAt(x+dx, y+2+dy);
          }
        }
        break;
      case 3:
        for(var dy=0; dy<2; dy++){
          for(var dx=0; dx<2; dx++){
            currentGrid[x-1-dx][y+dy] = 2-dx;
            showCellAt(x-1-dx, y+dy);
          }
        }
        break;
    }
    this.show();
    this.coolDownTime = coolingInterval;
  }
};

function shoot(){
  myShooter.shoot();
}

Shooter.prototype.move = function(direction){
  if (direction === this.direction){
    this.x += unitVectors[direction][0];
    this.y += unitVectors[direction][1];
  }
  else {
    this.direction = direction;
  }
  this.show();
};

Shooter.prototype.justMove = function(direction){
  // move without changing direction.
  this.x += unitVectors[direction][0];
  this.y += unitVectors[direction][1];
  this.show();
};
// }}}

// data management for development {{{
// export {{{
function exportToFile(){
  if(running){ stopLoop(); }
  var dataString = JSON.stringify(currentGrid);
  var downloader = document.createElement('a');
  document.body.appendChild(downloader);
  // appendchild is required for firefox.
  // ref. https://support.mozilla.org/en-US/questions/968992
  downloader.setAttribute(
    "href",
    "data:application/json," + encodeURIComponent(dataString));
    // download attribute : html5 feature, and
    // seemingly not supported in IE/Safari.
  downloader.setAttribute("download", "grid.json");
  downloader.click();
}
// }}}
// import {{{
function setGridfromJSON(jsonstring){
  var neogrid = JSON.parse(jsonstring);
  currentGrid = neogrid;
  showGrid();
}

function importFromFile(){
  if(running){ stopLoop(); }
  var myFileList = document.getElementById("importFrom").files;
  if (myFileList.length === 0){
    alert("Please specify a file, would you?");
    return;
  }
  var myFile = myFileList[0];
  var f = new FileReader();
  f.onload = function(e){
    setGridfromJSON(e.target.result);
  }
  f.readAsText(myFile);
}
// }}}
// }}}

window.onload=init;
