var scene, camera, renderer;
var geometry, material;
var walls = new Array();
var roomFloor;
var bottom;
var O = new THREE.Vector3(0,0,0);
var floorSize = 200;
var boxes = [];

window.onload = main

function main(){
  init();
  animate();
}

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    45, window.innerWidth/window.innerHeight, 1, 10000
  );
  camera.position.x = 220;
  camera.position.y = 0;
  camera.position.z = 80;
  camera.up = new THREE.Vector3(0,0,1);
  camera.lookAt(new THREE.Vector3(0,0,10));
  
  setFloor();
  setWorld();
  setLights();
  
  renderer = Detector.webgl? new THREE.WebGLRenderer(): new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMapEnabled = true;
  renderer.render(scene,camera);
  
  document.body.appendChild(renderer.domElement);
}

function setFloor(){
  var floorMat = new THREE.MeshLambertMaterial(
    {color: 0xc26c0a});
  var floorGeo = new THREE.PlaneGeometry(floorSize,floorSize);
  roomFloor = new THREE.Mesh(floorGeo,floorMat);
  roomFloor.receiveShadow = true;
  scene.add(roomFloor);
  
  var spm = new THREE.MeshBasicMaterial({color:0x88cc44});
  var spg = new THREE.SphereGeometry(2, 8, 8);
  var sphere = new THREE.Mesh(spg, spm);
  scene.add(sphere);
  
  var bottomMat = new THREE.MeshBasicMaterial(
    {wireframe:true});
  var bottomGeo = new THREE.PlaneGeometry(500,500,64,64);
  bottom = new THREE.Mesh(bottomGeo,bottomMat);
  bottom.position.z = -1;
  scene.add(bottom);
}

function setLights(){
  var light = new THREE.AmbientLight(0x404040);
  // soft white light
  scene.add(light);
  var light = new THREE.DirectionalLight(0x555511,2);
  light.position.x = -20;
  light.position.y = -20;
  light.position.z = 70;
  light.castShadow = true;
  light.shadowDarkness = 0.8;
  light.shadowMapWidth = 4096;
  light.shadowMapHeight = 4096;
  scene.add(light);
  var light = new THREE.DirectionalLight(0x55ff11,1);
  light.position.x = 20;
  light.position.y = 20;
  light.position.z = 120;
  light.castShadow = true;
  light.shadowDarkness = 0.3;
  light.shadowMapWidth = 4096;
  light.shadowMapHeight = 4096;
  light.shadowCameraVisible = true;
  light.lookAt(new THREE.Vector3(0,0,0));
  scene.add(light);
}

function setWorld(){
  var mat = new THREE.MeshLambertMaterial();
  var boxG = new THREE.BoxGeometry(3,3,3);
  var box;
  for (var i=0; i<20; i++){
    for (var j=0; j<20; j++){
      box = new THREE.Mesh(boxG,mat);
      box.position.x = 10*i - 100;
      box.position.y = 10*j - 100;
      box.position.z = 30;
      box.castShadow = true;
      boxes.push(box);
    }
  }
  for(var i=0; i<boxes.length; i++){
    scene.add(boxes[i]);
  }
}

function animate(){
}
