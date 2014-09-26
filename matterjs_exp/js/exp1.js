function setup(){ //{{{
  world = {};
  setupWorld(world);
  document.getElementById('addCircle').addEventListener(
    'click', function(e){addCircle(world);}
  );
} //}}}

function setupWorld(w){
  var contanier = document.getElementById('container');
  
  var options = {
    positionIterations: 6,
    velocityIterations: 4,
    enableSleeping: false
  };
  
  w.engine = Matter.Engine.create(container,options);
  
  setRenderOptions(w);
  
  createWalls(w);
  
  addCircle(w);
  
  Matter.Engine.run(w.engine);
}

function addCircle(w){
  var x = Math.random()*600+100;
  var y = Math.random()*280+20;
  var r = Math.random()*30+10;
  var circle = Matter.Bodies.circle(
    x, y, r,
    {
      torque: Math.random()*0.2 -0.1,
      density: Math.random()/500,
      restitution: Math.random()*0.9
    }, 32
  );
  Matter.Body.applyForce(
    circle, {x:x,y:y},
    { x: Math.random()*0.03 - 0.015,
      y: -Math.random()*0.02
    }
  )
  circle.render.fillStyle =
    "rgb(" + 0 + ',' +  Math.floor(circle.density*500*256)
  + ',' + Math.floor(circle.restitution/0.9*256) + ")";
  circle.render.lineWidth=3;
  console.log(circle.render.fillStyle);
  Matter.World.add(w.engine.world, circle);
}

function setRenderOptions(w){ //{{{
  Matter.Render.clear(w.engine.render);
  var renderOptions = w.engine.render.options;
  
  renderOptions.wireframes = false;
  renderOptions.showVelocity = true;
  renderOptions.showPositions = true;
  renderOptions.background = '#aaa';
  renderOptions.width = 800;
  renderOptions.height = 600; // not working?

  console.log(w.engine.render);
}//}}}

function createWalls(w, offset){ //{{{
  if (offset === undefined){
    offset = 5;
  }
  
  Matter.World.add(w.engine.world,[
      Matter.Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, { isStatic: true, friction:0.01 , restitution:1}),
      Matter.Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, { isStatic: true, friction:0.01, restitution:1 }),
      Matter.Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true, friction:0.01, restitution:1 }),
      Matter.Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true, friction:0.01, restitution:1 })
  ]);
} // }}}

window.addEventListener('load', setup);
