function readFile(fileobj){
  var f = new FileReader();
  f.onload = function(x){document.getElementById("results").innerHTML += (x.target.result);}
  f.readAsText(fileobj);
}

function reader(){
  var myFileList = document.getElementById("fileinput").files;
  for (var i=0; i<myFileList.length; i++){
    var a = myFileList[i];
    alert("reading " + a.name);
    readFile(a);
  }
}

function init(){
  document.getElementById("submit").onclick=reader;
}

window.onload=init;
