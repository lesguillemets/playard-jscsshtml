function init(){
  console.log('foo');
  console.log(window.innerHeight);
  var sid = document.getElementById("sid");
  sid.width = window.innerWidth;
  sid.height = window.innerHeight;
  ctx = sid.getContext("2d");
  console.log(sid);
  for (var x=0;x<sid.width;x+=10){
    for (var y=0; y<sid.height; y+=10){
      ctx.moveTo(x,0);
      ctx.lineTo(x,y);
      ctx.moveTo(0,y);
      ctx.lineTo(x,y);
    }
  }
  ctx.lineWidth = 1;
  ctx.strokeStype = "#eef";
  ctx.stroke();
}
window.onload=init;
