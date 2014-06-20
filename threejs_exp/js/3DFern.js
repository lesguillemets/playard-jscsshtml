var scene, camera, renderer;
var geometry, material, mesh;
width = 800;
height = 600;

window.onload = main;

function main(){
  init();
  animate();
}

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75, width/height, 1, 10000
  );
  camera.position.z = 1000;
  
  geometry = new THREE.BoxGeometry(100,100,100);
  material = new THREE.MeshBasicMaterial( {color: 0xff0000, wireframe:true});
  mesh = new THREE.Mesh(geometry, material);
  
  scene.add(mesh);
  
  renderer = new THREE.CanvasRenderer();
  renderer.setSize(width, height);
  renderer.domElement.style.setProperty("display", "block");
  renderer.domElement.style.setProperty("margin-left", "auto");
  renderer.domElement.style.setProperty("margin-right", "auto");
  
  document.getElementById("display").appendChild(renderer.domElement);
}

function animate(){
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;
  
  renderer.render(scene,camera);
}
