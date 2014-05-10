function init(){
  var canv = document.getElementById("drawarea");
  var w = canv.width;
  var h = canv.height;
  var ctx = canv.getContext("2d");
  mainLoop = function() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canv.width,canv.height);
    var times = Math.ceil(Math.pow(Math.random(),2)*15);
    for (var i=0; i<times; i++){
      var x = Math.floor(Math.random()*w);
      var y = Math.floor(Math.random()*h);
      var r = Math.floor(Math.random()*255).toString();
      var g = Math.floor(Math.random()*255).toString();
      var b = Math.floor(Math.random()*255).toString();
      ctx.fillStyle = "rgb(" + r +',' + g +',' + b+ ")";
      var size = 2*Math.random()+1;
      ctx.fillRect(x,y,size,size);
    }
    setTimeout("mainLoop()",36);
  }
  mainLoop();
}

window.onload = init;
