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
var lineWidth = 0.5;
var gridSize = 8;
var numberOfStates = 4;
var colors = ["#000000", "#FF0000", "#FF8800", "#FFFF00"];
var currentGrid;
var canvas;
var ctx;
var canvwidth, canvheight;
var width, height;
var running = false;
var timer;
var mouseState = null;
var mouseLocAsPos;
var isMousePresed = false;
var showBorders = true;
//}}}

function init(){
  setGrid();
  initialize();
  showGrid();
  canvas.addEventListener("mousedown", onMousePressed);
  canvas.addEventListener("mouseup", onMouseReleased);
  canvas.addEventListener("mousemove", onMouseMoved);
  canvas.addEventListener("mouseout", onMouseGetOut);
  canvas.addEventListener("touchstart", onTouchOn);
  canvas.addEventListener("touchend", onTouchOff);
  canvas.addEventListener("touchmove", onTouchMoved);
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
  }
  showGrid();
}

function currentCoords(e){
  var rect = e.target.getBoundingClientRect();
  var mouseX = e.clientX - rect.left;
  var mouseY = e.clientY - rect.top;
  return [mouseX,mouseY];
}
// }}}

function setGrid(){ // initialises the grid. call only once on load.{{{
  var canv = document.getElementById("world");
  var width = canv.width;
  var height = canv.height;
  var ctx = canv.getContext("2d");
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = "rgb(170,170,170)";
  for (var x=0; x<width; x+=gridSize){
    ctx.moveTo(x,0);
    ctx.lineTo(x,height);
  }
  for (var y=0; y<height; y+=gridSize){
    ctx.moveTo(0,y);
    ctx.lineTo(width,y);
  }
  ctx.stroke();
  ctx.lineWidth = 0;
} //}}}

// Main {{{
function willSpaun(n){
  return (n === 2);
}

function willSurvive(n){
  return (3<=n && n<=5);
}

function initialize(){
  canvas = document.getElementById("world");
  ctx = canvas.getContext("2d");
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
//   currentGrid[50][50] = 1;
//   currentGrid[50][51] = 1;
//   currentGrid[50][52] = 1;
}

function showGrid(){
  for(var x=1; x<width-1; x++){
    for(var y=1; y<height-1;y++){
      ctx.fillStyle = colors[currentGrid[x][y]];
      ctx.fillRect(x*gridSize+lineWidth/2, y*gridSize+lineWidth/2,
                   gridSize-lineWidth, gridSize-lineWidth);
    }
  }
}

function updateGridData(){
  var nextGrid = currentGrid.map(
    function(arr){return arr.slice(0);});
  for (var x=1; x<width-1; x++){
    for (var y=1; y<height-1; y++){
      // edge reserved.
      var cell = currentGrid[x][y];
      if (cell === 0){
        // if this cell is empty
        var n = countNeighbours(x,y);
        if (willSpaun(n)){
        //console.log("Spaun at" + x + "," + y);
          nextGrid[x][y]++;
        }
      }
      else if (cell === 1){
        // if this cell is alive and fine
        var n = countNeighbours(x,y);
        if (!willSurvive(n)){
          // ouch!
          nextGrid[x][y]++;
        }
      }
      else {
        nextGrid[x][y] = (cell+1)%numberOfStates;
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
  updateGridData();
  showGrid();
}

function toggleStart(){
  if(running){
    window.clearInterval(timer);
    running = false;
    document.getElementById("toggleStart").innerHTML = "Start";
  }
  else {
    timer = window.setInterval(step,100);
    running = true;
    document.getElementById("toggleStart").innerHTML = "Stop";
  }
}

function setColors(){
  for(var stateInd=0; stateInd<numberOfStates; stateInd++){
    var color = document.getElementById("color"+stateInd).value;
    colors[stateInd] = color;
    document.getElementById("state"+stateInd).style.background=color;
  }
  showGrid();
}

function reset(){
  if(running){
    window.clearInterval(timer);
    running = false;
    document.getElementById("toggleStart").innerHTML = "Start";
  }
  initialize();
  setGrid();
  showGrid();
}

function clearGrid(){
  if(running){
    window.clearInterval(timer);
    running = false;
    document.getElementById("toggleStart").innerHTML = "Start";
  }
  for (var x=0; x<width; x++){
    for (var y=0; y<height; y++){
      currentGrid[x][y] = 0;
    }
  }
  canvas.width = canvas.width;
  setGrid();
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
window.onload=init;
