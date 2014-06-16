var scene, camera, renderer;
var geometry, material, mesh;

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
  camera.position.z = 1000;
  
  geometry = new THREE.BoxGeometry(400,400,400);
  material = new THREE.MeshPhongMaterial(
    { map: THREE.ImageUtils.loadTexture('./img/water0.jpg')});
  mesh = new THREE.Mesh(geometry, material);
  
  scene.add(mesh);
  
  var light = new THREE.AmbientLight(0xaaaaaa);
  scene.add(light);
  
  renderer = Detector.webgl? new THREE.WebGLRenderer(): new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  document.body.appendChild(renderer.domElement);
}

function animate(){
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;
  
  renderer.render(scene,camera);
}
