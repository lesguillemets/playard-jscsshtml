window.onload = main;


function main(){
  d3.selectAll("p").style(
    "color",
    function(){ return "hsl(" + Math.random()*360 + ", 100%, 40%)";}
  );
  
  d3.selectAll("p").data([2,3,4]).style(
    "background-color", "black");
  
  d3.selectAll("p").data([18,20,24,26]).style(
    "font-size", function(d){return d + "px";});
  //requestAnimationFrame(main);
  d3.select('body').selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .enter().append("p")
  .text(function(d) { return "I’m number " + d + "!"; });
  // d3.selectAll("p").- - results in p outside body.
  d3.select('body').selectAll("p")
  .data([4, 8, 15, 16, 23, 42, 3])
  .text(function(d) { return "I’m number " + d + "!"; });

  var p = d3.select('body').selectAll('p').data([3,4,4,5,1,5,43,42,44,]);
  p.text(function(d) {return "FOOOOO " + d;}); // updated

  console.log(p);

  p.enter().append("p").text(function(d){return "I'm " + d;});
  // added
  var x = p.exit();
  console.log(x);
  x.remove();
}
