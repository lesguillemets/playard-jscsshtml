window.onload = main;

var viewWidth = 500;
var viewHeight = 300;
function main(){
  world = Physics();
  renderer = Physics.renderer(
    'canvas',
    {
      el : 'viewport',
      width : viewWidth,
      height : viewHeight,
      meta: false,
      styles: {
        'circle' : {
          strokeStyle : '#33333',
          linewidth: 1,
          fillStyle : 'rgb(80,220,120)',
          angleIndicator : '#351024'
        }
      }
    }
  );
  world. add(renderer);
  
  world.on('step', function(){world.render();});
  // not world.on('step', world.render)
  
  // bounds of the window
  var viewportBounds = Physics.aabb(0,0,viewWidth,viewHeight);
  
  world.add(Physics.behavior('edge-collision-detection', {
    aabb: viewportBounds,
    restitution: 0.99,
    cof: 0.99
  }));

  world.add(
    Physics.body('circle', {
      x : 50,
      y : 30,
      vx: 0.5 + 0.4*(Math.random()-0.5),
      vy: 0.05 + 0.1*Math.random(),
      radius: 20
    })
  );

  // ensure objects bounce when edge collision is detected
  world.add( Physics.behavior('body-impulse-response') );

  // add some gravity
  world.add( Physics.behavior('constant-acceleration') );

  Physics.util.ticker.on(function (time, dt){
    world.step(time);
  });
  Physics.util.ticker.start();
}
