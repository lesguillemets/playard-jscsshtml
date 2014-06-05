var a,b,c,d;
var canv, ctx;
var width,height;
var level;
var f0, f1;
var xMin, xMax, yMin, yMax;
var xRat, yRat;

function calcKoch(){
  initialize();
  var currentNodes = [[0,0]];
  for(var i=0; i<level; i++){
    ctx.fillStyle = HSVtoRGBStr(i/level,1,1);
    var nextNodes = [];
    for(var n=0; n<currentNodes.length; n++){
      var z = currentNodes[n];
      var zNext = f0(z);
      drawDotAt(zNext);
      nextNodes.push(zNext);
      
      zNext = f1(z);
      drawDotAt(zNext);
      nextNodes.push(zNext);
    }
    currentNodes = nextNodes;
    nextNodes = null;
  }
  alert("done");
}

function drawDotAt(z){
  ctx.fillRect(Math.floor((z[0]-xMin)*xRat),
               Math.floor((z[1]-yMin)*yRat)
               ,1,1);
}

function initialize(){
  canv = document.getElementById("viewer");
  canv.width = canv.width;
  width = canv.width;
  height = canv.height;
  ctx = canv.getContext("2d");
  a = [parseFloat(document.getElementById("ar").value),
      parseFloat(document.getElementById("ai").value)];
  b = [parseFloat(document.getElementById("br").value),
      parseFloat(document.getElementById("bi").value)];
  f0 = function(z){
    var re = a[0]*z[0] -a[1]*z[1] + b[0]*z[0] + b[1]*z[1];
    var im = a[0]*z[1] + a[1]*z[0] - b[0]*z[1] + b[1]*z[0];
    return [re,im];
  };
  c = [parseFloat(document.getElementById("cr").value),
      parseFloat(document.getElementById("ci").value)];
  d = [parseFloat(document.getElementById("dr").value),
      parseFloat(document.getElementById("di").value)];
  f1 = function(z){
    var re = c[0]*(z[0]-1) - c[1]*z[1] +
      d[0]*(z[0]-1) + d[1]*z[1] +1;
    var im = c[0]*z[1] + c[1]*(z[0]-1) - d[0]*z[1] + d[1]*(z[0]-1);
    return [re,im];
  }
  xMin = parseFloat(document.getElementById("xmin").value);
  yMin = parseFloat(document.getElementById("ymin").value);
  xMax = parseFloat(document.getElementById("xmax").value);
  yMax = parseFloat(document.getElementById("ymax").value);
  level = parseFloat(document.getElementById("level").value);
  
  xRat = width / (xMax-xMin);
  yRat = height / (yMax-yMin);
}

function setCanvSize(){
  var nw = parseInt(document.getElementById("newWidth").value);
  var nh = parseInt(document.getElementById("newHeight").value);
  var canv = document.getElementById("viewer");
  canv.width = nw;
  canv.height = nh;
}

function HSVtoRGBStr(h, s, v) {
  // h,s,v => String
  // 0<=h,s,v<=1
  var r, g, b, i, f, p, q, t;
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }
  return "rgb(" +
    Math.floor(r * 255) + "," +
    Math.floor(g * 255) + "," +
    Math.floor(b * 255) + ")";
}
