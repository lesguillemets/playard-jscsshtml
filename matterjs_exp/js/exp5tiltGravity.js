(function(){
  var sensorValueRatio = 0.1;
  var sensorSensitivity = 0.01;
  window.addEventListener('load', setup);
  
  function setup(){
    var universe = {};
    setupUniverse(universe);
    var g = universe.engine.world.gravity;
    window.addEventListener(
      'devicemotion',
      function(e){
        setGravity(g,e);
      }
    );
  }
  
  function setupUniverse(u){
    var container = document.getElementById('worldContainer');
    var options = {
      positionIterations: 6,
      velocityIterations: 4,
      enableSleeping: false
    };
    
    u.engine = Matter.Engine.create(container,options);
    var g = u.engine.world.gravity;
    g.y = 1;
    g.x = 0;
    setRenderOptions(u.engine);
    createWalls(u.engine.world);
    createBalls(u.engine.world);
    Matter.Engine.run(u.engine);
  }
  
  function setRenderOptions(e){ //{{{
    var options = e.render.options;
    options.wireframes = false;
    options.showVelocity = true;
    options.showPositions = true;
    options.showDebug = true;
    options.showAngleIndicator = true;
    options.background = '#aaa';
    options.width = 800;
    options.height = 600; // not working?
  } //}}}
  
  function createWalls(w, offset){ //{{{
    if (offset === undefined){
      offset = 5;
    }

    Matter.World.add(w,[
      Matter.Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, { isStatic: true, friction:0.01 , restitution:1}),
      Matter.Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, { isStatic: true, friction:0.01, restitution:1 }),
      Matter.Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true, friction:0.01, restitution:1 }),
      Matter.Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true, friction:0.01, restitution:1 })
    ]);
  } // }}}
  
  function createBalls(w,n){ //{{{
    if (n === undefined){ n = 3; }
    for (var i=0; i<n; i++){
      addRandomBall(w);
    }
  } //}}}
  
  function addRandomBall(w){ //{{{
    var x = Math.random()*600+100;
    var y = Math.random()*280+20;
    var r = Math.random()*20+20;
    var ball = Matter.Bodies.circle(
      x, y, r,
      {
        density: Math.random()/500,
        restitution: Math.sqrt(Math.random())
      }, 32
    );
    Matter.World.add(w, ball);
    return ball;
  } //}}}
  
  function setGravity(g,e){
    var gravity = e.accelerationIncludingGravity;
    g.x = _virtualify(gravity.x);
    g.y = _virtualify(gravity.y)*(-1);
  }
  
  function _virtualify(ax){
    return Math.floor(ax/sensorSensitivity) * sensorSensitivity * sensorValueRatio;
  }
  
})();
