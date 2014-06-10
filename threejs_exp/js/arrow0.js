var scene, camera, renderer;
var arrows = new Array();
var O = new THREE.Vector3(0,0,0);

window.onload = main;

function main(){
  init();
  animate();
}

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75, window.innerWidth/window.innerHeight, 1, 10000
  );
  camera.position.x = 500;
  camera.position.y = 500;
  camera.position.z = 500;
  camera.lookAt(O);
  
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
  renderer = new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene,camera);
  document.body.appendChild(renderer.domElement);
}

function animate(){
}
