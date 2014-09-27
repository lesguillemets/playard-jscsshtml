(function(){
  window.addEventListener('load', init);
  
  function init(){
    var container = document.getElementById('canvContainer');
    var engineOptions = {
      positionIterations: 6,
      velocityIterations: 4,
      enableSleeping: false
    }
    
    // create engine
    var engine = Matter.Engine.create(container, engineOptions);
    Matter.Engine.run(engine);
    
    var world = engine.world;
    setWorldOptions(world);
    setRenderOptions(engine);
    createPendulum(world);
  }
  
  function setWorldOptions(w){
    w.gravity.y = 2;
    w.gravity.x = 0;
  }
  
  function setRenderOptions(e){
    var rOp = e.render.options;
    rOp.wireframes = false;
    rOp.showDebug = true;
    rOp.showVelocity = true;
    rOp.showPositions = true;
  }
  
  function createPendulum(w){
    var circ = Matter.Bodies.circle(
      600, 500, 10,// x, y, r,
      {
        density: 4,
        frictionAir: 0.001
      }
    );
    var fixPoint = { x:400, y:0 };
    Matter.World.add(w, circ);
    var constr = Matter.Constraint.create(
      {
        pointA : fixPoint,
        bodyB : circ
      }
    );
    
    Matter.World.add(w, constr);
  }
  
})();
