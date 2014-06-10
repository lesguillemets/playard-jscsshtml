var scene, camera, renderer;
var geometry, material;
var meshes = new Array();
var theta=0;
var xCentre = 0;
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
  camera.position.z = 800;
  camera.position.y = 500;
  camera.position.x = 500;
  camera.lookAt(O);
  
  geometry = new THREE.BoxGeometry(100,100,100);
  
  // meshbasicmaterial
  var i=0;
  material = new THREE.MeshBasicMaterial();
    //{color: 0xff0000, wireframe:true});
  mesh = new THREE.Mesh(geometry, material);
  meshes.push(mesh);
  i++;
  
  // MeshDepthMaterial
  material = new THREE.MeshDepthMaterial()
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.x += 150*i;
  meshes.push(mesh);
  i++;
  
  //MeshLambertMaterial
  material = new THREE.MeshLambertMaterial();
    //{color:0x00ff00, emissive:0x00aaff});
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.x += 150*i;
  meshes.push(mesh);
  i++;
  
  material = new THREE.MeshPhongMaterial();
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.x += 150*i;
  meshes.push(mesh);
  i++;
  //
  
  
  xCentre = (150*i - 50)/2;
  O = new THREE.Vector3(xCentre,0,0);
  // add to scene
  for(var j=0; j<meshes.length; j++){
    scene.add(meshes[j]);
  }
  var light = new THREE.AmbientLight(0x404040);
  // soft white light scene.add( light );
  scene.add(light);
  var light = new THREE.PointLight(0x0ff070, 10, 1000);
  light.position.set(500, 500, 500);
  scene.add(light);
  renderer = new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene,camera);
  
  document.body.appendChild(renderer.domElement);
}

function animate(){
  requestAnimationFrame(animate);
  camera.position.x = 1000*Math.cos(theta) + xCentre;
  camera.position.y = 1000*Math.sin(theta);
  camera.position.z = 500*Math.sin(theta*0.3);
  camera.lookAt(O);
  theta += 0.01;
  if (theta>100){theta -= 20*Math.PI;}
  renderer.render(scene,camera);
}
