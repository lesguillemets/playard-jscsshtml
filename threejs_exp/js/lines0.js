var scene, camera, renderer;
var geometry, material, line;
var plane;
var pmat

window.onload = main;

function main(){
  init();
  animate();
}

function init(){
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  camera = new THREE.PerspectiveCamera(
    45, window.innerWidth/window.innerHeight, 1,500);
  camera.position.set(0,0,100);
  camera.lookAt(new THREE.Vector3(0,0,0));
  
  scene = new THREE.Scene;
  
  material = new THREE.LineBasicMaterial(
    { color: 0x0000ff }
  );
  
  geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-10,0,0));
  geometry.vertices.push(new THREE.Vector3(0,10,0));
  geometry.vertices.push(new THREE.Vector3(10,0,0));
  geometry.vertices.push(new THREE.Vector3(0,0,10));
  geometry.vertices.push(new THREE.Vector3(-10,0,0));
  geometry.vertices.push(new THREE.Vector3(0,0,10));
  geometry.vertices.push(new THREE.Vector3(0,10,0));
  geometry.faces.push(new THREE.Face3(0,1,2));
  
  line = new THREE.Line(geometry, material);
  scene.add(line);
  material = new THREE.MeshBasicMaterial({color:0x00ffff});
  mesher = new THREE.Mesh(geometry,material)
  scene.add(mesher);
  
  var pgeo = new THREE.PlaneGeometry( 100, 100, 50,50);
  pmat = new THREE.MeshBasicMaterial(
    {color: 0x008aef, wireframe:true} );
  plane = new THREE.Mesh( pgeo, pmat );
  scene.add( plane );

  renderer.render(scene,camera);
}

function animate(){
  requestAnimationFrame(animate);
  line.rotation.x += 0.01;
  line.rotation.y += 0.02;
  
  renderer.render(scene,camera);
}
