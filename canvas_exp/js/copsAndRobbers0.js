(function(){
  window.addEventListener('load', main);
  
  var spf = 1000/60;
  var prevTimeStamp = 0;
  var currentsCanv, currentsCtx, lociCanv, lociCtx;
  var width,height;
  var numberOfCops = 20;
  var numberOfRobbers = 5;
  var cops = [], robbers = [];
  var colors = {
    cops: {
      currents : 'rgb(0,100,255)',
      loci : 'rgba(0,70,200,0.7)'
    },
    robbers: {
      currents : 'rgb(255,100,0)',
      loci : 'rgba(200,70,0,0.7)'
    }
  };
  var circleRadius = 5;
  var strokeWidth = 2;
  // pxcels per msec.
  // 10 sec for 600 px.
  var copsMaxSpeed = 0.06;
  var robbersMaxSpeed = 0.06;
  
  function main(){
    setup();
    mainLoop();
  }
  
  function setup(){
    // get doms
    currentsCanv = document.getElementById('currents');
    currentsCtx = currentsCanv.getContext('2d');
    lociCanv = document.getElementById('loci');
    lociCtx = lociCanv.getContext('2d');
    lociCtx.lineWidth = strokeWidth;
    // world width and height
    width = lociCanv.width;
    height = lociCanv.height;
    // players, get ready!
    _scatterCops();
    _scatterRobbers();
  }
  
// functions under setup {{{
  function _scatterCops(){//{{{
    for (var i=0; i<numberOfCops; i++){
      cops.push({
        position: new Vector(
          width/4 + Math.random()*width/2,
          height/4 + Math.random()*height/2
        ),
        v: copsMaxSpeed
      });
    }
  }//}}}
  
  function _scatterRobbers(){//{{{
    for (var i=0; i<numberOfRobbers; i++){
      robbers.push({
        position: new Vector(
          Math.random()*width,
          Math.random()*height
        ),
        v: robbersMaxSpeed
      });
    }
  }//}}}
// }}}
  
  function update(dt){
    clearCurrents();
    moveRobbers(dt);
    moveCops(dt);
  }
  
  function clearCurrents(){
    currentsCanv.width = currentsCanv.width;
  }
  
  function moveRobbers(dt){ // {{{
    if (isNaN(dt)) {console.log("NAN"); dt=spf; }
    var globalCopperCenter = findCenter(cops);
    currentsCtx.fillStyle = colors.robbers.currents;
    lociCtx.strokeStyle = colors.robbers.loci;
    lociCtx.beginPath();
    for (var i=0; i<robbers.length; i++){
      var robber = robbers[i];
      var direction =
        robber.position.subtract(globalCopperCenter).normalizeInPlace();
      var movement = direction.multiplyInPlace(
        dt*robber.v
      );
      
      // draw on canvas
      lociCtx.moveTo(robber.position.x, robber.position.y);
      lociCtx.lineTo(
        robber.position.x + movement.x,
        robber.position.y + movement.y
      );
      
      robber.position.addInPlace(movement);
      currentsCtx.beginPath();
      currentsCtx.arc(
        robber.position.x, robber.position.y,
        circleRadius,0, 2*Math.PI
      );
      currentsCtx.fill();
    }
    lociCtx.stroke();
  } //}}}
  
  function moveCops(dt){ // {{{
    if (isNaN(dt)) {console.log("NAN"); dt=spf; }
    var globalRobberCenter = findCenter(robbers);
    currentsCtx.fillStyle = colors.cops.currents;
    lociCtx.strokeStyle = colors.cops.loci;
    lociCtx.beginPath();
    for (var i=0; i<cops.length; i++){
      var cop = cops[i];
      var direction =
        globalRobberCenter.subtract(cop.position).normalizeInPlace();
      var movement = direction.multiplyInPlace(
        dt*cop.v
      );
      
      // draw on canvas
      lociCtx.moveTo(cop.position.x, cop.position.y);
      lociCtx.lineTo(
        cop.position.x + movement.x,
        cop.position.y + movement.y
      );
      
      cop.position.addInPlace(movement);
      currentsCtx.beginPath();
      currentsCtx.arc(
        cop.position.x, cop.position.y,
        circleRadius,0, 2*Math.PI
      );
      currentsCtx.fill();
    }
    lociCtx.stroke();
  }
  
  function findCenter(people){
    var n = people.length;
    var g = people.reduce(
      function(acc,p){acc.addInPlace(p.position); return acc;},
      new Vector(0,0)
    );
    g.multiplyInPlace(1/n);
    return g;
  }
  //}}}
  
  function mainLoop(timestamp){ //{{{
    var dt = timestamp - prevTimeStamp;
    if (dt < spf){
      // do nothing, wait a little longer.
    }
    else {
      // update and go next frame.
      update(dt);
      prevTimeStamp = timestamp;
    }
    // next iteration
    requestAnimationFrame(mainLoop);
  } //}}}
  
  // Vector {{{
  
  function Vector(x,y){
    this.x = x;
    this.y = y;
  }
  
  Vector.prototype.reverse = function(){
    return new Vector(-this.x, -this.y);
  };
  
  Vector.prototype.add = function(other){
    return new Vector(
      this.x + other.x,
      this.y + other.y
    );
  };
  
  Vector.prototype.addInPlace = function(other){
    this.x += other.x;
    this.y += other.y;
    return this;
  };
  
  Vector.prototype.subtract = function(other){
    return new Vector(
      this.x - other.x,
      this.y - other.y
    );
  };
  
  Vector.prototype.subtractInPlace = function(other){
      this.x -= other.x;
      this.y -= other.y;
      return this;
  };
  
  Vector.prototype.multiply = function(a){
    return new Vector (this.x*a, this.y*a);
  };
  
  Vector.prototype.multiplyInPlace = function(a){
    this.x *= a;
    this.y *= a;
    return this;
  };
  
  Vector.prototype.norm = function(){
    return Math.sqrt(this.x*this.x + this.y*this.y);
  };
  
  Vector.prototype.normalize = function(){
    return this.multiply(1/this.norm());
  };
  
  Vector.prototype.normalizeInPlace = function(){
    return this.multiplyInPlace(1/this.norm());
  };
  
  Vector.prototype.innerProd = function(one,other){
    if (other === undefined){
      return this.x*one.x + this.y*one.y;
    }
    else{
      return one.x*other.x + one.y*other.y;
    }
  };
  
  // }}}
})();