(function(){
  window.addEventListener('load', function(){
    document.getElementById('button').addEventListener('click',main);
  });
  
  var world = { //{{{
    options: { //{{{
      spf : 1000/60, // (milli)secs per frame
      numberOfCops : 85,
      numberOfRobbers : 100,
      colors : {
        cops: {
          currents : 'rgb(0,100,255)',
          loci : 'rgba(0,70,200,0.7)'
        },
        robbers: {
          currents : 'rgb(255,100,0)',
          loci : 'rgba(200,70,0,0.7)'
        }
      },
      circleRadius : 3,
      strokeWidth: 1,
      copsMaxSpeed : 0.03,
      robbersMaxSpeed : 0.031
    }, //}}}
    
    actors : { //{{{
      cops : [],
      robbers : []
    }, //}}}
    
    vars : { //{{{
      prevTimeStamp : 0,
      width : null,
      height: null
    }, //}}}
    
    canvas : { //{{{
      currentsCanv: null,
      currentsCtx: null,
      lociCanv: null,
      lociCtx: null
    } //}}}
  }; //}}}
  
  function main(){
    setup(world);
    mainLooper(world)();
  }
  
  function setup(w){
    // get doms
    w.canvas.currentsCanv = document.getElementById('currents');
    w.canvas.currentsCtx = w.canvas.currentsCanv.getContext('2d');
    w.canvas.lociCanv = document.getElementById('loci');
    w.canvas.lociCtx = w.canvas.lociCanv.getContext('2d');
    w.canvas.lociCtx.lineWidth = w.options.strokeWidth;
    // world width and height
    w.vars.width = w.canvas.lociCanv.width;
    w.vars.height = w.canvas.lociCanv.height;
    // players, get ready!
    _scatterCops(w);
    _scatterRobbers(w);
  }
  
// functions under setup {{{
  function _scatterCops(w){//{{{
    var cops = w.actors.cops;
    for (var i=0; i<w.options.numberOfCops; i++){
      cops.push({
        position: new Vector(
          w.vars.width*3/8 + Math.random()*w.vars.width/4,
          w.vars.height*3/8 + Math.random()*w.vars.height/4
        ),
        v: w.options.copsMaxSpeed
      });
    }
  }//}}}
  
  function _scatterRobbers(w){//{{{
    var robbers = w.actors.robbers;
    for (var i=0; i<w.options.numberOfRobbers; i++){
      robbers.push({
        position: new Vector(
          w.vars.width*3/8 + Math.random()*w.vars.width/4,
          w.vars.height*3/8 + Math.random()*w.vars.height/4
        ),
        v: w.options.robbersMaxSpeed
      });
    }
  }//}}}
// }}}
  
  function update(w,dt){
    clearCurrents(w);
    moveRobbers(w,dt);
    moveCops(w,dt);
  }
  
  function clearCurrents(w){
    w.canvas.currentsCanv.width = w.canvas.currentsCanv.width;
  }
  
  function moveRobbers(w,dt){ // {{{
    if (isNaN(dt)) {console.log("NAN"); dt=w.options.spf; }
    var cops = w.actors.cops;
    var robbers = w.actors.robbers;
    var globalCopperCenter = findCenter(cops);
    w.canvas.currentsCtx.fillStyle = w.options.colors.robbers.currents;
    w.canvas.lociCtx.strokeStyle = w.options.colors.robbers.loci;
    w.canvas.lociCtx.beginPath();
    for (var i=0; i<robbers.length; i++){
      var robber = robbers[i];
      var direction =
        robber.position.subtract(globalCopperCenter).normalizeInPlace();
      var movement = direction.multiplyInPlace(
        dt*robber.v
      );
      
      // draw on canvas
      w.canvas.lociCtx.moveTo(robber.position.x, robber.position.y);
      w.canvas.lociCtx.lineTo(
        robber.position.x + movement.x,
        robber.position.y + movement.y
      );
      
      robber.position.addInPlace(movement);
      w.canvas.currentsCtx.beginPath();
      w.canvas.currentsCtx.arc(
        robber.position.x, robber.position.y,
        w.options.circleRadius,0, 2*Math.PI
      );
      w.canvas.currentsCtx.fill();
    }
    w.canvas.lociCtx.stroke();
  } //}}}
  
  function moveCops(w,dt){ // {{{
    if (isNaN(dt)) {console.log("NAN"); dt=w.options.spf; }
    var cops = w.actors.cops;
    var robbers = w.actors.robbers;
    var globalRobberCenter = findCenter(robbers);
    w.canvas.currentsCtx.fillStyle = w.options.colors.cops.currents;
    w.canvas.lociCtx.strokeStyle = w.options.colors.cops.loci;
    w.canvas.lociCtx.beginPath();
    for (var i=0; i<cops.length; i++){
      var cop = cops[i];
      // find the nearest robber
      var min_distance = cop.position.subtract(
        robbers[0].position).squareNorm();
      var nearest = 0;
      for (var j=1; j<robbers.length;j++){
        var robber = robbers[j];
        var dist = cop.position.subtract(robber.position).squareNorm();
        if (dist < min_distance){
          nearest = j;
          min_distance = dist;
        }
      }
      // and try to catch that guy
      var direction =
        robbers[nearest].position.subtract(cop.position).normalizeInPlace();
      var movement = direction.multiplyInPlace(
        dt*cop.v
      );
      
      // draw on canvas
      w.canvas.lociCtx.moveTo(cop.position.x, cop.position.y);
      w.canvas.lociCtx.lineTo(
        cop.position.x + movement.x,
        cop.position.y + movement.y
      );
      
      cop.position.addInPlace(movement);
      w.canvas.currentsCtx.beginPath();
      w.canvas.currentsCtx.arc(
        cop.position.x, cop.position.y,
        w.options.circleRadius,0, 2*Math.PI
      );
      w.canvas.currentsCtx.fill();
    }
    w.canvas.lociCtx.stroke();
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
  
  function mainLooper(w){ //{{{
    mainLoop = function(timestamp){
      var dt = timestamp - w.prevTimeStamp;
      if (dt < w.options.spf){
        // do nothing, wait a little longer.
      }
      else {
        // update and go next frame.
        update(w,dt);
        w.prevTimeStamp = timestamp;
      }
      // next iteration
      requestAnimationFrame(mainLoop);
    };
    return mainLoop;
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
  
  Vector.prototype.squareNorm = function(){
    return this.x*this.x + this.y*this.y;
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
  
  Vector.prototype.rotate = function(theta){
    return new Vector(
      this.x*Math.cos(theta) - this.y*Math.sin(theta),
      this.x*Math.sin(theta) + this.y*Math.cos(theta)
    );
  };
  
  Vector.prototype.rotateInPlace = function(theta){
      var newX = this.x*Math.cos(theta) - this.y*Math.sin(theta);
      var newY = this.x*Math.sin(theta) + this.y*Math.cos(theta);
      this.x = newX;
      this.y = newY;
      return this;
  };
  
  // }}}
})();
