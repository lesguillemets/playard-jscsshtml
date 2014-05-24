var lineWidth = 0.5;
var gridSize = 8;
/*
* One Grid will be drawn like this:
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
*/

function init(){
  setGrid();
}

function setGrid(){
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
}
window.onload=init;

