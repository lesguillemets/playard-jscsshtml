(function(){
  var scene, camera, renderer;
  var O = new THREE.Vector3(0,0,0);
  window.addEventListener('load', main);
  function main(){
    init();
    animate();
  }
  
  function init(){
    scene = new THREE.Scene();
    setCamera();
    setRenderer();
    createWorld();
    renderer.render(scene,camera);
  }
  
  function setCamera(){
    camera = new THREE.PerspectiveCamera(
      35, window.innerWidth/window.innerHeight, 1, 4000
    );
    camera.position.set(50,100,50);
    camera.up = new THREE.Vector3(0,1,0);
    camera.lookAt(O);
  }
  
  function setRenderer(){ //{{{
    renderer = Detector.webgl?
      new THREE.WebGLRenderer():
      new THREE.CanvasRenderer();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    renderer.setClearColor( 0xaaaaaa, 1);
    renderer.render(scene,camera);
    document.body.appendChild(renderer.domElement);
  } //}}}
  
  function createWorld(){ //{{{
    var geo = new THREE.PlaneGeometry(80,80,200,200);
    for (var i=0; i<geo.vertices.length; i++){
      geo.vertices[i].z = 2*Math.random();
    }
    var material = new THREE.MeshPhongMaterial({
      color: 0xdddddd,
      wireframe: true
    });
    
    var plane = new THREE.Mesh(geo,material);
    plane.position.set(0,-10,0);
    scene.add(plane);
  } //}}}
  
  function animate(){
  }
})();
