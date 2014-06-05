var width, height, maxStep, drawArea, canv, ctx, aR, aI;
var dx, dy;
var x,y;
var nx, ny // pixel location
var nextZ;
var threshold = 4; // 2**2

function setCanvSize(){
  var nw = parseInt(document.getElementById("newWidth").value);
  var nh = parseInt(document.getElementById("newHeight").value);
  var canv = document.getElementById("viewer");
  canv.width = nw;
  canv.height = nh;
}

function calcFrac(){
  initialize();
  x = drawArea.xMin;
  for (nx=0; nx<width; nx++){
    y = drawArea.yMin;
    for (ny=0; ny< height; ny++){
      checkAndDraw([x,y],nx,ny);
      y += dy;
    }
    x += dx;
  }
}

function checkAndDraw(z,nx,ny) {
  for(var n=0; n<maxStep; n++){
    z = nextZ(z);
    if ((z[0]*z[0] + z[1]*z[1]) > threshold){
      ctx.fillStyle = HSVtoRGBStr(n/maxStep,1,1);
      ctx.fillRect(nx,ny,1,1);
      return;
    }
  }
  ctx.fillStyle = HSVtoRGBStr(0,0,0);
  ctx.fillRect(nx,ny,1,1);
}

function initialize() {
  // initialize values
  canv = document.getElementById("viewer");
  ctx = canv.getContext("2d");
  width = canv.width;
  height = canv.height;
  aR = parseFloat(document.getElementById("re").value);
  aI = parseFloat(document.getElementById("im").value);
  nextZ = function(z){
    var r = z[0];
    var i = z[1];
    var rnext = r*r - i*i + aR;
    var inext = 2*i*r + aI;
    return [rnext, inext];
  };
  maxStep = parseInt(document.getElementById("steps").value);
  var xmin = parseFloat(document.getElementById("xmin").value);
  var xmax = parseFloat(document.getElementById("xmax").value);
  var ymin = parseFloat(document.getElementById("ymin").value);
  var ymax = parseFloat(document.getElementById("ymax").value);
  drawArea = new Area(xmin, xmax, ymin, ymax);
  dx = (xmax-xmin)/width;
  dy = (ymax-ymin)/height;
  // reset canvas
  canv.width = width;
}

function Area(xMin,xMax,yMin,yMax){
  this.xMin = xMin;
  this.xMax = xMax;
  this.yMin = yMin;
  this.yMax = yMax;
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
