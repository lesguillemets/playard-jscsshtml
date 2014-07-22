window.onload = main;

function type(d){
  d.rain = +d.rain;
  return d;
}

function main(){
  var gridSize = 10;
  var sqS = 12;
  var width= sqS * 60;
  var height = sqS * 7;
  
  var x = d3.scale.linear().range([90,20]);
  
  var chart = d3.select(".chart")
      .attr("width", width)
      .attr("height", height);
  
  d3.csv("./data/kochi_rain.csv", type, function(error,data){
    x.domain([0, d3.max(data, function(d){return d.rain;})]);
    
    var grid = chart.selectAll('g')
      .data(data)
    .enter().append('g')
      .attr("transform", function(d,i){
        var dayOfWeek = i%7;
        var weekOfYear = Math.floor(i/7);
        return "translate(" + sqS*weekOfYear + ',' + sqS*dayOfWeek + ")";
      });
    
    grid.append("rect")
      .attr('width', gridSize).attr('height', gridSize)
      .attr('title', function(d){
        return d.date + "\n" + d.rain + " mm";
      })
      .style('fill', function(d){
        if(d.rain > 0){
          return 'hsl(240,100%,' + x(d.rain) + '%)';
        }
        else {
          return 'hsl(20,20%,90%)';
        }
      });
  });
}
