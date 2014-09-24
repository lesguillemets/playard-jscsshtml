(function(){
  window.addEventListener('load', setup);
  
  function setup(){
    document.getElementById('submit').addEventListener(
      'click', main
    );
  }
  
  function main(){
    var file = document.getElementById('fileinput').files[0];
    if (!file){
      alert("please specify a file!");
      return;
    }
    else{
      var cnv = document.getElementById('canv');
      loadImg(file, cnv);
    }
  }
  
  function loadImg(file, cnv){
    var fr = new FileReader();
    fr.onload = function(e){
      createImg(e.target.result,cnv);
    };
    fr.readAsDataURL(file);
  }
  
  function createImg(data,cnv){
    var img = new Image();
    img.src = data;
    img.onload = function(e){
      printToCanv(img, cnv);
      copyCanvas(cnv, document.getElementById('resul0'),500); // only works here.
    };
  }
  
  function printToCanv(img, cnv, w){
    if (w === undefined){ var w = 800;}
    cnv.width = w;
    cnv.height = w*img.height/img.width;
    var ctx = cnv.getContext('2d');
    ctx.drawImage(img,0,0,w,w*img.height/img.width);
  }
  
  function copyCanvas(from, to, w){
    var fromCtx = from.getContext('2d');
    var imgData = fromCtx.getImageData(0,0,from.width,from.height);
    console.log(imgData);
    to.width = w;
    to.height = w*imgData.height/imgData.width;
    var toCtx = to.getContext('2d');
    toCtx.putImageData(imgData,10,20);
    toCtx.drawImage(toCtx.canvas,0,0);
  }
  
})();
