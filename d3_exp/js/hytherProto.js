window.onload = main;

function formType(tempConv, rainConv){
  return function(d){
    d.rainfall = +d.rainfall;
    d.temperature = +d.temperature;
    d.tempLoc = Math.floor(tempConv(d.temperature)*1000)/1000;
    d.rainLoc = Math.floor(rainConv(d.rainfall)*1000)/1000;
    return d;
  }
}

function main(){
  var width=500;
  var height=500;
  var xmargin=50;
  var ymargin=50;
  var expectedMinTemp = -10;
  var expectedMaxTemp = 35;
  var expectedMinRainfall = 0;
  var expectedMaxRainfall = 500;
  
  var tempConverter // temperature -> coordinate
    = d3.scale.linear().range([height+ymargin,ymargin])
                       .domain([
                         expectedMinTemp,
                         expectedMaxTemp
                       ]);
  var rainConverter // rainfall -> coordinate
    = d3.scale.linear().range([xmargin, xmargin+width])
                       .domain([
                         expectedMinRainfall,
                         expectedMaxRainfall
                       ]);
  
  var type = formType(tempConverter, rainConverter);
  var chart = d3.select("body").append("svg")
      .attr("width", width+2*xmargin)
      .attr("height",height+2*ymargin)
      .attr("class", 'chart')
      .style("overflow", "visible");
  
  function drawHyther(cityname, year, color){ // {{{
    var dataFileName = "./data/hyther/" + cityname + '/' + year + '.csv';
    d3.csv(
      dataFileName, type,
      function(error,data){
        var city = chart.append("g").attr('id',"graph " +  cityname + ':' + year);
        var graphFunc = d3.svg.line()
        .x(function(d) { return d.rainLoc; })
        .y(function(d) { return d.tempLoc; })
        .interpolate("linear-closed");
        
        city.append("path")
        .attr('d', graphFunc(data))
        .attr('id', "path " + cityname + ':' + year)
        .style("stroke", color)
        .style("stroke-width", 1.5)
        .style("fill", 'none');
        
        // FIXME Z0.0 degrees rendered as 20 degrees
        var month = city.append("g")
          .attr('id', "text " + cityname + ':' + year);
        month.selectAll('text').data(data)
        .enter().append('text')
        .attr('x', function(d){ return d.rainLoc;})
        .attr('y', function(d){ return d.tempLoc; })
        .attr('dx', 5)
        .attr('dy', -5)
        .attr('title', function(d,i){
          var yearStr = (year === 'mean' ? '平年' : year + '年');
          var label = cityname + ", " + yearStr + " " + (i+1) + '月\n';
          label += d.rainfall + " mm, " + d.temperature + " ℃";
          return label;
        })
        .style('font-size','10px')
        .text(function(d,i){ return i+1;});
        
        // TODO : points should ALWAYS be on the top.
        var points = city.append("g")
                      .attr('id', "dot "+cityname + ':' + year);
        points.selectAll('circle').data(data)
        .enter().append('circle')
        .attr('cx', function(d){ return d.rainLoc;})
        .attr('cy', function(d){ return d.tempLoc; })
        .attr('r',3)
        .attr('title', function(d,i){
          var yearStr = (year === 'mean' ? '平年' : year + '年');
          var label = cityname + ", " + yearStr + " " + (i+1) + '月\n';
          label += d.rainfall + " mm, " + d.temperature + " ℃";
          return label;
        })
        .style('fill', 'rgba(30,30,30,0.5)');
      }
    );
  } //}}}
  //drawHyther("京都", 2013,'hsl(0,80%,50%)');
  //drawHyther("高知", 2013, 'hsl(180,80%,50%)');
  //drawHyther("釧路", 2013, 'hsl(90,80%,50%)');
  //drawHyther("新潟", 2013, 'hsl(270,80%,50%)');
  drawHyther("旭川", "mean", 'hsla(0,80%,50%,0.8)');
  drawHyther("札幌", "mean", 'hsla(40,80%,50%,0.8)');
  drawHyther("熊谷", "mean", 'hsla(80,80%,50%,0.8)');
  drawHyther("熊谷",2013, 'hsla(210,80%,50%,0.8)');
  
  function drawAxis(){ // {{{
    var xAxis = d3.svg.axis()
      .scale(rainConverter)
      .tickSize(-height);
      //.tickSubdivide(true);
    
    var x = chart.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (ymargin+height) + ")")
    .call(xAxis);
    
    x.selectAll('line')
      .style("stroke", 'rgba(100,100,100,0.3)')
      .style("stroke-width", 0.5);
    
    var yAxis = d3.svg.axis()
      .scale(tempConverter).tickSize(-width)
      .orient('left');
    
    var y = chart.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + xmargin + ",0)")
    .call(yAxis);
    
    y.selectAll('line')
      .style("stroke", 'rgba(100,100,100,0.3)')
      .style("stroke-width", 0.5);
  } //}}}
  drawAxis();
}
