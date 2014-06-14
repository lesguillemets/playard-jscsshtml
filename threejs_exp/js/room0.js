var scene, camera, renderer;
var geometry, material;
var walls = new Array();
var roomFloor;
var bottom;
var O = new THREE.Vector3(0,0,0);
var floorSize = 100;

window.onload = main

function main(){
  init();
  animate();
}

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    35, window.innerWidth/window.innerHeight, 1, 10000
  );
  camera.position.x = 200;
  camera.position.y = 0;
  camera.position.z = 80;
  camera.up = new THREE.Vector3(0,0,1);
  camera.lookAt(new THREE.Vector3(0,0,10));
  
  var spm = new THREE.MeshBasicMaterial({color:0xFF0000});
  var spg = new THREE.SphereGeometry(2, 8, 8);
  var sphere = new THREE.Mesh(spg, spm);
  sphere.castShadow = true;
  sphere.position.z = 10;
  scene.add(sphere);
  setWorld();
  createWalls();
  setLights();
  
  renderer = Detector.webgl? new THREE.WebGLRenderer(): new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMapEnabled = true;
  renderer.render(scene,camera);
  
  document.body.appendChild(renderer.domElement);
}

function setWorld(){
  var bottomMat = new THREE.MeshBasicMaterial(
    {wireframe:true});
  var bottomGeo = new THREE.PlaneGeometry(500,500,64,64);
  bottom = new THREE.Mesh(bottomGeo,bottomMat);
  bottom.position.z = -10;
  scene.add(bottom);
}

function setLights(){
  var light = new THREE.AmbientLight(0x404040);
  // soft white light
  scene.add(light);
  var light = new THREE.PointLight(0xaaaa99, 3, 200);
  light.position.set(-40, -40, 30);
  scene.add(light);
  
  var light = new THREE.DirectionalLight(0x555511,2);
  light.position.x = -20;
  light.position.y = -20;
  light.position.z = 20;
  light.lookAt(new THREE.Vector3(0,-10,0));
  light.castShadow = true;
  scene.add(light);
}

function createWalls(){
  var wallMat = new THREE.MeshLambertMaterial(
    {color: 0xc26c0a});
  var floorGeo = new THREE.PlaneGeometry(floorSize,floorSize);
  roomFloor = new THREE.Mesh(floorGeo,wallMat);
  roomFloor.receiveShadow = true;
  scene.add(roomFloor);
  
  var wallMat = new THREE.MeshLambertMaterial(
    {color:0xbbbbbb});
  var wallGeo = new THREE.PlaneGeometry(floorSize/2,floorSize);
  
  var wall = new THREE.Mesh(wallGeo, wallMat);
  wall.position.x = -floorSize/2;
  wall.position.y = 0;
  wall.position.z = (floorSize/2)/2;
  wall.rotation.y = Math.PI/2;
  walls.push(wall);
  wallGeo = new THREE.PlaneGeometry(floorSize,floorSize/2);
  
  wall = new THREE.Mesh(wallGeo, wallMat);
  wall.position.x = 0;
  wall.position.y = -floorSize/2;
  wall.position.z = (floorSize/2)/2;
  wall.rotation.x = -Math.PI/2;
  walls.push(wall);
  
  wall = new THREE.Mesh(wallGeo, wallMat);
  wall.position.x = 0;
  wall.position.y = floorSize/2;
  wall.position.z = (floorSize/2)/2;
  wall.rotation.x = Math.PI/2;
  walls.push(wall);
  
  for (var i=0; i<walls.length; i++){
    scene.add(walls[i]);
  }
}

function animate(){
}
