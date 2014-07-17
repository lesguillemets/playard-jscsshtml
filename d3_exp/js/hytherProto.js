window.onload = main;

function type(d){
  d.rainfall = +d.rainfall;
  d.temperature = +d.temperature;
  return d;
}

function main(){
  var width=500;
  var height=500;
  var expectedMinTemp = 0;
  var expectedMaxTemp = 30;
  
  var tempConverter
    = d3.scale.linear().range([height,0])
                       .domain([
                         expectedMinTemp,
                         expectedMaxTemp
                       ]);
  
  var chart = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height",height)
      .attr("class", 'chart');
  
  d3.csv(
    "./data/niigata_2013_hythergraph.csv", type,
    function(error,data){
      var graphFunc = d3.svg.line()
        .x(function(d) { return d.rainfall; })
        .y(function(d) {
          console.log(tempConverter(d.temperature));
          return tempConverter(d.temperature);
        }).interpolate("linear-closed");
      
      chart.append("path")
        .attr("d", graphFunc(data))
        .style("stroke", 'blue')
        .style("fill", 'none');
    }
  );
}
