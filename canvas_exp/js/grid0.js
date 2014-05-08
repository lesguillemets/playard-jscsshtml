window.onload = main;

var gridsize = 30;

function main () {
  var cnv = document.getElementById("world");
  var cnt = cnv.getContext("2d");
  var width = cnv.width;
  var height = cnv.height;
  for (var x=0; x<width; x+=gridsize){
    for (var y=0; y<width; y+= gridsize){
      r = Math.floor(Math.random()*255);
      g = Math.floor(Math.random()*255);
      b = Math.floor(Math.random()*255);
      color = "rgba(" + r + "," + g + "," + b + ",0.8)";
      cnt.fillStyle = color;
      var tgridsize = gridsize * (1+Math.random()*0.5);
      cnt.fillRect(x,y,tgridsize,tgridsize);
    }
  }
  //setTimeout("main()",100);
}
