function init(){
  var canv = document.getElementById("drawarea");
  var ctx = canv.getContext("2d");
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0,0,canv.width,canv.height);
  var isPressed = false;
  var pendingPressed = false;
  var radius = 8;
  var hue = 0;
  var s = 1.0;
  var v = 0.6;
  var color = HSVtoCs(hue,s,v)
  ctx.strokeStyle = color;
  ctx.lineWidth=radius;
  var onMouseReleased = function(e){
    console.log("released");
    isPressed = false;
  };
  var onMousePressed = function(e){
    console.log(e);
    isPressed = true;
    ctx.beginPath();
    var cord = currentCoords(e);
    ctx.moveTo(cord[0],cord[1]);
  };
  var onMouseMoved = function(e){
    if (isPressed){
      var cord = currentCoords(e);
      ctx.lineTo(cord[0],cord[1]);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cord[0],cord[1]);
      hue = (hue+1)%360;
      color = HSVtoCs(hue,s,v)
      ctx.strokeStyle = color;
    }
  };
  var MouseOut = function(e){
    pendingPressed = isPressed;
    isPressed = false;
  };
  var MouseIn = function(e){
    if (pendingPressed){
      isPressed = true;
      var cord = currentCoords(e);
      ctx.beginPath();
      ctx.moveTo(cord[0],cord[1]);
    }
    pendingPressed = false;
  };
  canv.addEventListener("mousedown", onMousePressed);
  canv.addEventListener("mouseup", onMouseReleased);
  canv.addEventListener("mousemove", onMouseMoved);
  canv.addEventListener("mouseout", function(){});
  
  var turn = true;
  mainLoop = function (){
    if (!turn){
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(0,0,canv.width,canv.height);
    }
    turn = !turn;
    setTimeout("mainLoop()",16);
  }
  mainLoop();
}

function currentCoords(e){
  var rect = e.target.getBoundingClientRect();
  var mouseX = e.clientX - rect.left;
  var mouseY = e.clientY - rect.top;
  return [mouseX,mouseY];
}

function HSVtoCs(h, s, v) {
  var r, g, b, i, f, p, q, t;
  h = h/360;
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
    [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)].toString()
  + ")";
}
window.onload = init;
