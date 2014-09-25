(function(){
  window.addEventListener('load', setup);
  
  function setup(){ //{{{
    document.getElementById('submit').addEventListener(
      'click', main
    );
    
    document.getElementById('isNum').addEventListener(
      'change', toggleNum
    );
  } //}}}
  
  function toggleNum(e){
    var rgbVs = document.getElementById('rgbValues');
    var inputs = rgbVs.getElementsByTagName('input');
    if (document.getElementById('isNum').checked){
      var newType = 'number';
      var newStep = 0.025;
    }
    else {
      var newType = 'range';
      var newStep = 'any';
    }
    for (var i=0; inputs.length; i++){
      inputs[i].type = newType;
      inputs[i].step = newStep;
    }
  }
  
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
    var rgbVs = document.getElementById("rgbValues");
    rgbVs.addEventListener('change', function(){userInput(fromCnv)});
    gray(fromCnv, document.getElementById('result'),
         function(r,g,b){return (r+g+b)/3;}
        );
  }
  
  function userInput(from, w){
    var rv = +document.getElementById('rvi').value;
    console.log(rv);
    document.getElementById('rv').innerHTML = rv;
    var gv = +document.getElementById('gvi').value;
    document.getElementById('gv').innerHTML = gv;
    var bv = +document.getElementById('bvi').value;
    document.getElementById('bv').innerHTML = bv;
    var s = rv+gv+bv;
    document.getElementById('sumup').innerHTML = "(/" + s + ")";
    
    var f = function(r,g,b){
      return (r*rv + g*gv + b*bv)/s;
    }
    
    gray(from, document.getElementById('result'), f, w);
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
    toCtx.putImageData(toImgData,0,0);
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
