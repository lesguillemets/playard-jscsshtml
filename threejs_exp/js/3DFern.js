var scene, camera, renderer;
var geometry, material, mesh;
var width = 800;
var height = 600;

window.onload = main;

var initialVars = [
  [0,0,0.01,0,0.26,0,0,0,0.05,0,0,0],
  [0.2,-0.26,-0.01,0.23,0.22,-0.07,0.07,0,0.24,0,0.8,0],
  [-0.25,0.28,0.01,0.26,0.24,-0.07,0.07,0,0.24,0,0.22,0],
  [0.85,0.04,-0.01,-0.04,0.85,-0.09,0,0.08,0.84,0,0.8,0],
]

function main(){
  init();
  animate();
}

function init(){
  setInitialVars();
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

function setInitialVars(){
  for(var fn=0; fn<4; fn++){
    for(var n=0; n<12; n++){
      document.getElementById("var"+fn+((n<10)? ("0"+n) : n)).value =
        initialVars[fn][n];
    }
  }
}

function animate(){
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;
  
  renderer.render(scene,camera);
}
