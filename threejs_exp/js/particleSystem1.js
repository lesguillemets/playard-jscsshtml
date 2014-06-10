var scene, camera, renderer;
var arrows = new Array();
var O = new THREE.Vector3(0,0,0);
var geometry, particles;
var v = 0.7;

window.onload = main;

function main(){
  init();
  animate();
  window.onkeypress = control;
}

function init(){
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2( 0x303000, 0.0007 );
  camera = new THREE.PerspectiveCamera(
    75, window.innerWidth/window.innerHeight, 10, 300
  );
  
  setCamera();
  var pMaterial = new THREE.ParticleBasicMaterial(
    { color: 0xaabbff,
      size: 0.8 });
  
  geometry = new THREE.Geometry();
  for (var i=0; i<10000; i++){
    var p = new THREE.Vector3(
      500*Math.random(), 500*Math.random(), 500*Math.random()
    );
    geometry.vertices.push(p);
  }
  particles = new THREE.ParticleSystem(geometry,pMaterial);
  scene.add(particles);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene,camera);
  document.body.appendChild(renderer.domElement);
}

function animate(){
  for(var i=0; i<particles.geometry.vertices.length; i++){
    var p = particles.geometry.vertices[i];
    p.z -= v;
    if (p.z < 0 || p.z > 500){
      if(p.z<0){p.z = 500;}else{p.z=0};
      p.x = 500*Math.random();
      p.y = 500*Math.random();
    }
  }
  particles.geometry.verticesNeedUpdate = true;
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}

function control(e){
  switch (e.charCode){
    case 119:
    case 107:
      v += 0.01;
      break;
    case 115:
    case 106:
      v -= 0.01;
      break;
  }
}

function setCamera(){
  camera.position.x = 250;
  camera.position.y = 250;
  camera.position.z = 250;
  camera.lookAt(new THREE.Vector3(250,250,500));
}
