// create sample object
var myObject = new Array(10);
for (var i=0; i<myObject.length; i++){
  myObject[i] = new Array(4);
  for (var j=0; j<myObject[i].length; j++){
    myObject[i][j] = i*10+j;
  }
}

// convert to string
var datatext = JSON.stringify(myObject);

function downloadme(){
  // create a element
  var downloader = document.createElement('a');
  // required for firefox. ref. https://support.mozilla.org/en-US/questions/968992
  document.body.appendChild(downloader);
  downloader.setAttribute(
    "href",
    "data:application/json," + encodeURIComponent(datatext));
    // download attribute : html5 feature, and
    // seemingly not supported in IE/Safari.
  downloader.setAttribute("download", "data.json");
  downloader.click();
}
