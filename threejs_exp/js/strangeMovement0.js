(function(){
  var scene, camera, renderer;
  var geometry, material;
  var walls = [];
  var spheres = [];
  var basePositions = [];
  var roomFloor;
  var worldFloor;
  var t = 0;
  var O = new THREE.Vector3(0,0,0);
  var floorSize = 500;
  
  window.addEventListener('load',main);
  
  function main(){ // {{{
    init();
    animate();
  } //}}}
  
  function init(){ //{{{
    scene = new THREE.Scene();
    setCamera();
    createEnvironments();
    setLights();
    setRenderer();
    console.log(scene);
  } //}}}
  
  function setRenderer(){ //{{{
    renderer = Detector.webgl?
      new THREE.WebGLRenderer():
      new THREE.CanvasRenderer();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    renderer.render(scene,camera);
    document.body.appendChild(renderer.domElement);
  } //}}}
  
  function setCamera(){ //{{{
    camera = new THREE.PerspectiveCamera(
      55, window.innerWidth/window.innerHeight, 0.1, 1000
    );
    
    camera.position.x = 300;
    camera.position.y = 0;
    camera.position.z = 50;
    camera.up = new THREE.Vector3(0,0,1);
    camera.lookAt(O);
  } //}}}
  
  function putSphere(p,r,m){ //{{{
    if (r===undefined){ r = 10;} // radius
    if (m===undefined){
      m = new THREE.MeshLambertMaterial( {
      });
    } // material
    var spheregeo = new THREE.SphereGeometry(r, 32,32);
    var sphere = new THREE.Mesh(spheregeo, m);
    scene.add(sphere);
    sphere.position.set(p.x,p.y,p.z);
    return sphere;
  } //}}}
  
  function createEnvironments(){
    for (var i=0; i<10; i++){
      var loc = new THREE.Vector3(i*2,i*2+18*Math.random()-9,i*24);
      var sp = putSphere(loc,9);
      sp.castShadow = true;
      sp.receiveShadow = true;
      spheres.push(sp);
      basePositions.push({
        x: sp.position.x,
        y: sp.position.y,
        z: sp.position.z,
      });
    }
    setFloor();
  }
  
  function setLights(){ //{{{
    var amblight = new THREE.AmbientLight(0x202020);
    // soft white light
    scene.add(amblight);
    var light1 = new THREE.DirectionalLight(0x338888, 1.0);
    light1.position.set(0,200,200);
    light1.castShadow = true;
    light1.shadowDarkness = 0.5;
    light1.shadowMapWidth = 2048;
    light1.shadowMapHeight = 2048;
    light1.lookAt(O);
    light1.shadowCameraVisible = true;
    scene.add(light1);
    var light2 = new THREE.DirectionalLight(0xffffff, 1.4);
    light2.position.set(0,0,600);
    light2.castShadow = true;
    light2.shadowDarkness = 0.4;
    light2.shadowMapWidth = 2048;
    light2.shadowMapHeight = 2048;
    light2.shadowCameraVisible = true;
    light2.lookAt(O);
    scene.add(light2);
  } //}}}
  
  function setFloor(){ //{{{
    var floorMat = new THREE.MeshLambertMaterial(
      {color: 0x445522}
    );
    var floorGeo = new THREE.PlaneGeometry(floorSize,floorSize);
    roomFloor = new THREE.Mesh(floorGeo,floorMat);
    roomFloor.receiveShadow = true;
    scene.add(roomFloor);
    
    var bottomMat = new THREE.MeshBasicMaterial(
      {wireframe:true}
    );
    var bottomGeo = new THREE.PlaneGeometry(1000,1000,64,64);
    worldFloor = new THREE.Mesh(bottomGeo,bottomMat);
    worldFloor.position.z = -1;
    scene.add(worldFloor);
  } //}}}
  
  function animate(){ //{{{
    requestAnimationFrame(animate);
    t++;
    renderer.render(scene,camera);
    spheres.forEach( function(e,i){
      var basePos = basePositions[i];
      e.position.set(basePos.x,basePos.y+30*Math.sin(Math.PI*(t+i*10)/100),basePos.z-Math.sin(t/100)*14*i);
    });
    if (t>1000){ t = 0;}
  } //}}}
})();
