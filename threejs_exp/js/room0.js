var scene, camera, renderer;
var geometry, material;
var walls = new Array();
var roomFloor;
var O = new THREE.Vector3(0,0,0);

window.onload = main

function main(){
  init();
  animate();
}

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    25, window.innerWidth/window.innerHeight, 1, 10000
  );
  camera.position.x = 300;
  camera.position.y = 25;
  camera.position.z = 30;
  camera.up = new THREE.Vector3(0,0,1);
  camera.lookAt(new THREE.Vector3(0,25,10));
  
  var spm = new THREE.MeshBasicMaterial({color:0xFF0000});
  var spg = new THREE.SphereGeometry(2, 8, 8);
  var sphere = new THREE.Mesh(spg, spm);
  scene.add(sphere);
  createWalls();
  
  var light = new THREE.AmbientLight(0x404040);
  // soft white light scene.add( light );
  scene.add(light);
  var light = new THREE.PointLight(0x0ff070, 10, 100);
  light.position.set(50, 50, 50);
  scene.add(light);
  renderer = Detector.webgl? new THREE.WebGLRenderer(): new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene,camera);
  
  document.body.appendChild(renderer.domElement);
}

function createWalls(){
  var wallMat = new THREE.MeshLambertMaterial();
  var wallGeo = new THREE.PlaneGeometry(50,50);
  walls.push(new THREE.Mesh(wallGeo,wallMat));
  var wall2 = new THREE.Mesh(wallGeo, wallMat);
  wall2.position.z = 20;
  wall2.position.x = 0;
  wall2.position.y = 20;
  walls.push(wall2);
  walls[1].rotation.x -= Math.PI/2;
//   walls[1].rotation.y+= Math.PI/2;
  
  for (var i=0; i<walls.length; i++){
    scene.add(walls[i]);
  }
}

function animate(){
}
