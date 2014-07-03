var canvas, ctx;
var size;
var lyapString, xmin, xmax, ymin, ymax, N, threshold;
var lsLength;
var dataArray;
var maximum, minimum;

function init(){
  canvas = document.getElementById("canv");
  ctx = canvas.getContext('2d');
  setCanvasSize();
  document.getElementById("calcButton").onclick = main;
}

function main(){
  setCanvasSize();
  getVariables();
  if (! /^[ab]*$/.test(lyapString) ){
    alert("string must consist of 'a' and 'b's.");
    return;
  }
  calculate();
  show();
}

function calculate(){ // {{{
  dataArray = new Array();
  var gridWidth = (xmax-xmin)/size;
  var gridHeight = (ymax-ymin)/size;
  maximum = -Infinity;
  minimum = Infinity;
  for (var a=xmin; a<xmax; a+=gridWidth){
    var dataRow = new Array();
    for(var b=ymin; b<ymax; b+=gridHeight){
      var x = 0.5;
      var r;
      r = lyapString[0] === 'a' ? a : b;
      x = r*x*(1-x);
      var lambdaN = 0;
      for (var step=1; step<N; step++){
        r = lyapString[step%lsLength] === 'a' ? a : b;
        lambdaN += Math.log(Math.abs(r*(1-x*2)));
        x = r*x*(1-x);
      }
      var lambda = lambdaN/N;
      if (Math.abs(lambda) !== Infinity){
        if (lambda > maximum){ maximum = lambda; }
        else if (lambda < minimum) { minimum = lambda;}
      }
      dataRow.push(lambda);
    }
    dataArray.push(dataRow);
  }
} // }}}

function show(){
  var upperColorStep = maximum/256;
  var lowerColorStep = -minimum/256;
  for (var y=0; y<size; y++){
    for( var x=0; x<size; x++){
      var s = dataArray[x][y];
      if (Math.abs(s) !== Infinity){
        if(s>0){
          var color = "rgb(0,0," + Math.floor(s/upperColorStep) + ")";
        } else {
          var color = "rgb(0," + Math.floor(-s/lowerColorStep) + ",0)";
        }
      } else {
        var color = "rgb(255,255,255)";
      }
      ctx.fillStyle = color;
      ctx.fillRect(x,y,1,1);
    }
  }
}

function setCanvasSize(){
  size = parseInt(document.getElementById("size").value);
  canvas.width = size;
  canvas.height = size;
}

function getVariables(){
  lyapString = document.getElementById("lyapString").value.toLowerCase();
  lsLength = lyapString.length;
  xmin = parseFloat(document.getElementById("xmin").value);
  xmax = parseFloat(document.getElementById("xmax").value);
  ymin = parseFloat(document.getElementById("ymin").value);
  ymax = parseFloat(document.getElementById("ymax").value);
  N = parseInt(document.getElementById("N").value);
  threshold = parseFloat(document.getElementById("threshold").value);
}

window.onload = init;
