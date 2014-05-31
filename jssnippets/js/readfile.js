function readFile(fileobj){
  var f = new FileReader();
  f.onload = function(e){
    document.getElementById("results").innerHTML += (e.target.result);
  }
  f.readAsText(fileobj);
}
// memo : when using e.target.result, we might run into this:
// http://stackoverflow.com/questions/18898036

function reader(){
  var myFileList = document.getElementById("fileinput").files;
  for (var i=0; i<myFileList.length; i++){
    var readingFile = myFileList[i];
    alert("reading " + readingFile.name);
    readFile(readingFile);
  }
}

function init(){
  document.getElementById("submit").onclick=reader;
}

window.onload=init;
