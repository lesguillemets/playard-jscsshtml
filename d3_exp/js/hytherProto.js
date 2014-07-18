window.onload = main;

function formType(converter){
  return function(d){
    d.rainfall = +d.rainfall;
    d.temperature = +d.temperature;
    d.tempLoc = Math.floor(converter(d.temperature)*1000)/1000;
    return d;
  }
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
  
  var type = formType(tempConverter);
  var chart = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height",height)
      .attr("class", 'chart');
  
  function drawHyther(dataFileName, color){ // {{{
    d3.csv(
      dataFileName, type,
      function(error,data){
        var city= chart.append("g").attr('id',dataFileName);
        var graphFunc = d3.svg.line()
        .x(function(d) { return d.rainfall; })
        .y(function(d) { return d.tempLoc; })
        .interpolate("linear-closed");
        
        city.append("path")
        .attr("d", graphFunc(data))
        .style("stroke", color)
        .style("fill", 'none');
        
        var points = city.append("g");
        points.selectAll('circle').data(data)
        .enter().append('circle')
        .attr('cx', function(d){ return d.rainfall;})
        .attr('cy', function(d){ return d.tempLoc; })
        .attr('r',4)
        .style('fill', 'grey');

        var month = city.append("g");
        month.selectAll('text').data(data)
        .enter().append('text')
        .attr('x', function(d){ return d.rainfall;})
        .attr('y', function(d){ return d.tempLoc; })
        .text(function(d,i){ return i+1;});
      }
    );
  } //}}}
  drawHyther("data/hyther/京都/2013.csv",'hsl(0,100%,50%)');
  drawHyther("data/hyther/釧路/2013.csv", 'hsl(180,100%,50%)');
  drawHyther("data/hyther/京都/mean.csv",'hsl(0,50%,50%)');
  drawHyther("data/hyther/釧路/mean.csv", 'hsl(180,50%,50%)');
  drawHyther("data/hyther/新潟/mean.csv",'hsl(270,100%,50%)');
}
