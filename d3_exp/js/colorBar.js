window.onload = main;

function main (){
  var width=420, barHeight = 20;
  
  var t=0;

  var data = [4,27,16,18,23,42];
  data = new Array();
  for (var i=0; i<72; i++){
    data[i] = 5*i;
  }

  var x = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0,width]);
  // I think we could just function(x){return x*(datamax/width);}

  var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight * data.length);
  
  var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d,i){
        //console.log(d); -> 4, 27, 16, 18
        // console.log(i); -> 0,1,2,3
        return "translate(0," + i*barHeight + ")";
      });
  
  bar.append("rect").attr("width", x).attr("height", barHeight - 1)
    .style("fill", function(d){
      return "hsl(" + (x(d)/d3.max(data)*360) + ",100%, 40%)";
    });
  
  bar.append("text")
      .attr("x", function(d) {return x(d) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d){return d;});
  
  function mainLoop(){
    requestAnimationFrame(mainLoop);
    d3.select(".chart").selectAll("rect").style(
      "fill", function(d){
      return "hsl(" + (x(d)/d3.max(data)*360+t) + ", 100%, 40%)";
    });
    t+=1;
    if (t>360){ t = t-360;}
  }
  mainLoop();
}

