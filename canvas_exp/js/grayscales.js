(function(){
  window.addEventListener('load', setup);
  
  function setup(){ //{{{
    document.getElementById('submit').addEventListener(
      'click', main
    );
  } //}}}
  
  function main(){ //{{{
    var file = document.getElementById('fileinput').files[0];
    if (!file){
      alert("please specify a file!");
      return;
    }
    else{
      var cnv = document.getElementById('canv');
      loadandProcessImg(file, cnv);
    }
  } //}}}
  
  function loadandProcessImg(file, cnv){ //{{{
    var fr = new FileReader();
    fr.onload = function(e){
      createandProcessImg(e.target.result,cnv);
    };
    fr.readAsDataURL(file);
  } //}}}
  
  function createandProcessImg(data,cnv){ //{{{
    var img = new Image();
    img.src = data;
    img.onload = function(e){
      printToCanv(img, cnv);
      afterCreation(cnv); // only works here.
    };
  } //}}}
  
  function printToCanv(img, cnv, w){ //{{{
    if (w === undefined){ var w = 800;}
    cnv.width = w;
    cnv.height = w*img.height/img.width;
    var ctx = cnv.getContext('2d');
    ctx.drawImage(img,0,0,w,w*img.height/img.width);
  } //}}}
  
  function afterCreation(fromCnv){
    // main function after creating image from the file.
    gray(fromCnv, document.getElementById('resul0'),
         function(r,g,b){return (r+g+b)/3;}
        );
    gray(fromCnv, document.getElementById('resul1'),
         function(r,g,b){return r*0.2989 + g*0.5970 + b*0.1140;}
        );
  }
  
  function gray(from, to, f, w){
    if (w === undefined){ var w = from.width;}
    // note: distinguish between getImageData() and getImageData().data
    var imgdata = from.getContext('2d').getImageData(0, 0, from.width, from.height);
    var data = imgdata.data;
    var toCtx = to.getContext('2d');
    var toImgData = toCtx.createImageData(imgdata); // just copies dementions.
    var toData = toImgData.data;
    to.width = w;
    to.height = w*from.height/from.width;
    var i=0;
    while (i<data.length){
      var r = data[i++];
      var g = data[i++];
      var b = data[i++];
      var a = data[i++];
      var gr = f(r,g,b);
      for(var j=-4; j<-1; j++){
        toData[i+j] = gr;
        // a
        toData[i-1] = 255;
      }
    }
    toCtx.putImageData(toImgData,10,20);
    toCtx.drawImage(toCtx.canvas,0,0);
  }
  
  function copyCanvas(from, to, w){// {{{
    
    if (w === undefined){
      var w = 500;
    }
    var fromCtx = from.getContext('2d');
    var imgData = fromCtx.getImageData(0,0,from.width,from.height);
    console.log(imgData);
    to.width = w;
    to.height = w*imgData.height/imgData.width;
    var toCtx = to.getContext('2d');
    toCtx.putImageData(imgData,0,0);
    toCtx.drawImage(toCtx.canvas,0,0);
  } //}}}
  
})();
