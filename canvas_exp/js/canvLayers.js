function init(){
  var bg = document.getElementById("bg");
  var fg = document.getElementById("fg");
  var bgctx = bg.getContext("2d");
  var fgctx = fg.getContext("2d");
  fgctx.fillStyle = "#7799ff";
  fgctx.fillRect(100,100,600,400);
  bgctx.fillStyle = "#666600";
  bgctx.fillRect(10,10,780,580);
}

window.onload=init;
