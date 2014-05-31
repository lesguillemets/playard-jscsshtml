// ref:http://stackoverflow.com/questions/19679842
var myObject = new Array(10);
for (var i=0; i<myObject.length; i++){
  myObject[i] = new Array(4);
  for (var j=0; j<myObject[i].length; j++){
    myObject[i][j] = i*10+j;
  }
}
var datatext = JSON.stringify(myObject);

function downloadme(){
  var downloader = document.createElement('a');
  downloader.setAttribute(
    "href",
    "data:application/json," + encodeURIComponent(datatext));
  downloader.setAttribute("download", "data.json");
  downloader.click();
}
