var scene, camera, renderer;
var arrows = new Array();
var O = new THREE.Vector3(0,0,0);
var geometry, particles;
var v = 0.01;

window.onload = main;

function main(){
  init();
  animate();
}

function init(){
  scene = new THREE.Scene();
//   scene.fog = new THREE.FogExp2( 0x000000, 0.0007 );
  camera = new THREE.PerspectiveCamera(
    75, window.innerWidth/window.innerHeight, 1, 10000
  );
  
  setCamera();
  drawCo();
  
  geometry = new THREE.Geometry();
  for (var i=0; i<100000; i++){
    var p = new THREE.Vector3(
      500*Math.random(), 500*Math.random(), 500*Math.random()
    );
    p.v = 0;
    geometry.vertices.push(p);
  }
  particles = new THREE.ParticleSystem(geometry);
  scene.add(particles);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene,camera);
  document.body.appendChild(renderer.domElement);
}

function animate(){
  for(var i=0; i<particles.geometry.vertices.length; i++){
    var p = particles.geometry.vertices[i];
    p.multiplyScalar(1 - (p.v / p.distanceTo(O)));
    p.v += 0.01;
  }
  particles.geometry.verticesNeedUpdate = true;
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}

function setCamera(){
  camera.position.x = 300;
  camera.position.y = 300;
  camera.position.z = 300;
  camera.up = new THREE.Vector3(0,0,1);
  camera.lookAt(O);
}

function drawCo(){
  var codir = new THREE.Vector3(1,0,0);
  var arrow = new THREE.ArrowHelper(codir, O, 300, 0xff0000);
  arrows.push(arrow);
  var codir = new THREE.Vector3(0,1,0);
  var arrow = new THREE.ArrowHelper(codir, O, 300, 0x00ff00);
  arrows.push(arrow);
  var codir = new THREE.Vector3(0,0,1);
  var arrow = new THREE.ArrowHelper(codir, O, 300, 0x0000ff);
  arrows.push(arrow);
  
  for(var i=0; i<arrows.length; i++){
    scene.add(arrows[i]);
  }
}
