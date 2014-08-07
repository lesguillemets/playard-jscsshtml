window.onload = main;
function main(){
  // setup map
  var width = 600, height = 600;
  var mapsvg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("display", "block")
      .style("margin-left", "auto")
      .style("margin-right", "auto")
      .style("overflow", "visible")
      .style("border", "1px solid black");
  
  // draw map
  d3.json("./data/maps/jp_map_and_cities.json", function(e,jp){
    if (e) {return console.error(e);}
    
    var subunits = topojson.feature(jp, jp.objects.subunits)
    var projection =
      d3.geo.mercator()
        .scale(800)
        .center([135,35])
        .translate([width/2,height/2]);
    var mappath = d3.geo.path().projection(projection);
    var colors = ['red', 'green', 'purple'];
    mapsvg.append("path")
      .datum(subunits)
      .attr("d", mappath)
      .style('fill', function(n,i){return colors[i]});
  });
}
