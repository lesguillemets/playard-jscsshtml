var lineWidth = 0.5;
var gridSize = 8;
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
*
}}}*/

function init(){
  setGrid();
  initialize();
  showGrid();
}

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

var numberOfStates = 4;
var colors = ["#000000", "#FF0000", "#FF8800", "#FFFF00"];
var currentGrid;
var canvas;
var ctx;
var width, height;

function willSpaun(n){
  return n === 2;
}

function willSurvive(n){
  return (3<=n && n<=5);
}

function initialize(){
  canvas = document.getElementById("world");
  ctx = canvas.getContext("2d");
  width = canvas.width;
  height = canvas.height;
  currentGrid = new Array(width);
  for (var x=0; x<width; x++){
    currentGrid[x] = new Array(height);
    for (var y=0; y<height; y++){
      currentGrid[x][y] = Math.floor(Math.random()*numberOfStates);//0;
    }
  }
}

function showGrid(){
  for(var x=0; x<width; x++){
    for(var y=0; y<width;y++){
      ctx.fillStyle = colors[currentGrid[x][y]];
      ctx.fillRect(x*gridSize+lineWidth/2, y*gridSize+lineWidth/2,
                   gridSize-lineWidth, gridSize-lineWidth);
    }
  }
}

// }}}
window.onload=init;

