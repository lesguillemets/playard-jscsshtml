window.onload = main;

var width=500, height=500;

var data = [
  [width/20, height/20]
]

function initWalk(){
  for (var i=0; i<900; i++){
    var last = data[data.length-1];
    data.push([
      last[0] + Math.random() -0.5,
      last[1] + Math.random() -0.5
    ]);
  }
}

function main(){
  initWalk();
  var walkFunc = d3.svg.line()
    .x(function(d) { return 12*d[0]; })
    .y(function(d) { return 12*d[1]; })
    .interpolate('linear');
  
  var svgCont = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height",height)
      .attr("class", 'chart');
  
  svgCont.append("path")
    .attr("d", walkFunc(data))
    .attr("stroke", "blue")
    .attr("fill", "none");
}
