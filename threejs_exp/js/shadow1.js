var scene, camera, renderer;
var geometry, material;
var walls = new Array();
var roomFloor;
var dlight, slight;
var bottom;
var O = new THREE.Vector3(0,0,0);
var floorSize = 100;
var boxes = [];
var theta = 0;
var alpha = 30;
var da = 0.2;

window.onload = main

function main(){
  init();
  animate();
}

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    65, window.innerWidth/window.innerHeight, 1, 10000
  );
  camera.position.x = 30;
  camera.position.y = 0;
  camera.position.z = 20;
  camera.up = new THREE.Vector3(0,0,1);
  camera.lookAt(new THREE.Vector3(0,0,0));
  
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
    {color: 0xcccccc});
  var floorGeo = new THREE.PlaneGeometry(floorSize,floorSize);
  roomFloor = new THREE.Mesh(floorGeo,floorMat);
  roomFloor.receiveShadow = true;
  scene.add(roomFloor);
  
  var spm = new THREE.MeshBasicMaterial({color:0x88cc44});
  var spg = new THREE.SphereGeometry(1, 8, 8);
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
  dlight = new THREE.DirectionalLight(0xbbbb88,1.5);
  dlight.position.x = -30;
  dlight.position.y = -30;
  dlight.position.z = 30;
  dlight.target.position.set(0,0,0);
  dlight.castShadow = true;
  dlight.shadowDarkness = 0.8;
  dlight.shadowMapWidth = 1024;
  dlight.shadowMapHeight = 1024;
  dlight.shadowCameraVisible = true;
  dlight.shadowCameraNear = 0;
  dlight.shadowCameraFar = 100;
  dlight.shadowCameraTop = 100;
  dlight.shadowCameraRight = 100;
  dlight.shadowCameraLeft = -100;
  dlight.shadowCameraBottom = -100;
  scene.add(dlight);
  
  slight = new THREE.SpotLight(0xccccff,10);
  slight.position.set(-50,50,30);
  slight.target.position.set(0,0,0);
  slight.castShadow = true;
  slight.shadowMapWidth = 1024;
  slight.shadowMapHeight = 1024;
  slight.shadowCameraVisible = true;
  slight.shadowCameraNear = 0;
  slight.shadowCameraFar = 1000;
  slight.shadowCameraFov = 40;
  
  scene.add(slight);
}

function setWorld(){
  var mat = new THREE.MeshLambertMaterial();
  mat.color.set(0x33aaee);
  mat.emissive.set(0x222277);
  var boxG = new THREE.BoxGeometry(3,3,9);
  var box;
  box = new THREE.Mesh(boxG,mat);
  box.position.z = 4.5;
  box.castShadow = true;
  boxes.push(box);
  for(var i=0; i<boxes.length; i++){
    scene.add(boxes[i]);
  }
}

function animate(){
  // requestAnimationFrame(animate);
  // camera.position.x = alpha*Math.cos(theta);
  // camera.position.y = alpha*Math.sin(theta);
  // camera.position.z = alpha;
  // camera.lookAt(O);
  // theta += 0.01;
  // alpha += da;
  // if (theta>100){theta -= 20*Math.PI;}
  // if (alpha>200){da = -da;}
  // renderer.render(scene,camera);
}
