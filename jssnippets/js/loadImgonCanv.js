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
    };
  }
  
  function printToCanv(img, cnv){
    canv.width = img.width;
    canv.height = img.height;
    var ctx = canv.getContext('2d');
    ctx.drawImage(img,0,0);
  }
  
})();
