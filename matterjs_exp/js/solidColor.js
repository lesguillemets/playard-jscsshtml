(function(){
  
  window.addEventListener('load', init);
  
  function init(){ //{{{
    var container = document.getElementById('container');
    
    var engineOptions = {
      positionIterations: 6,
      velocityIterations: 4,
      enableSleeping: false
    }
    // create engine
    var engine = Matter.Engine.create(container, engineOptions);
    Matter.Engine.run(engine); // and run it
    var world = engine.world;
    setWorldOptions(engine);
    setRenderOptions(engine);
    engine.timing.timeScale = 1;
    createRoom(world);
    createThings(world);
  } //}}}
  
  // {{{
  function createThings(w){ //{{{
    var rect = Matter.Bodies.rectangle(20, 20, 50, 50, {torque:4});
    rect.render.fillStyle = "rgb(241,1,1)";
    Matter.World.add(w, rect);
  } //}}}
  
  function setWorldOptions(e){ //{{{
    e.world.gravity.y = 1;
    e.world.gravity.x = 0;
  } //}}}
  
  function setRenderOptions(e){ //{{{
    var rOp = e.render.options;
    rOp.wireframes = false;
    rOp.showDebug = true;
    rOp.showVelocity = true;
    rOp.showPositions = true;
  } //}}}
  
  function createRoom(w, offset){ //{{{
    if (offset === undefined){ var offset=5; }
    Matter.World.add(w, [
      Matter.Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
      Matter.Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
      Matter.Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true }),
      Matter.Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true })
    ]);
  } //}}}
  //}}}
})();
