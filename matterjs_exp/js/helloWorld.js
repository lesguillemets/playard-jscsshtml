(function(){

  function main(){
    var world = {};
    start(world);
  }

  function start(w){
    var container = document.getElementById('container'); // not a canv, a div.
    var options = {
      positionIterations: 6,
      velocityIterations: 4,
      enableSleeping: false
    };
    
    // create engine
    w.engine = Matter.Engine.create(container, options);
    w.engine.enableSleeping = false;
    
    // make walls
    var offset = 5;
    Matter.World.add(w.engine.world,[
      Matter.Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
      Matter.Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
      Matter.Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true }),
      Matter.Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true })
    ]);
    
    
    var renderOptions = w.engine.render.options;
    setRenderOptions(renderOptions);
    
    Matter.Engine.run(w.engine);
    
    // create circle
    var circ = Matter.Bodies.circle(
      400, 10, 20, // x, y, radius,
      { restitution:0.8}, 9  // options, max sides
    );
    console.log(circ);
    Matter.World.add(w.engine.world, circ);
  }
  
  function setRenderOptions(renderOptions){
    renderOptions.wireframes = true;
    renderOptions.showDebug = false;
    renderOptions.showBroadphase = false;
    renderOptions.showVelocity = true;
    renderOptions.showPositions = true;
    renderOptions.background = '#fff';
  }

  window.addEventListener('load', main);

})();
