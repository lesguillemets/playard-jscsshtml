(function(){
  var scene, camera, renderer, terra;
  var t=0;
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
  
  function setCamera(){ //{{{
    camera = new THREE.PerspectiveCamera(
      35, window.innerWidth/window.innerHeight, 1, 4000
    );
    camera.position.set(50,100,50);
    camera.up = new THREE.Vector3(0,0,1);
    camera.lookAt(O);
  } //}}}
  
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
    var geo = new THREE.PlaneGeometry(80,80,99,99);
    console.log(geo.vertices.length);
    for (var i=0; i<geo.vertices.length; i++){
      geo.vertices[i].z = 2*Math.sin(Math.sqrt(
        (Math.pow(Math.floor(i/100)-50,2)+ Math.pow(i%100 - 50,2))/10
      )+ Math.PI*(t/100));
    }
    var material = new THREE.MeshPhongMaterial({
      color: 0xdddddd,
      wireframe: true
    });
    
    terra = new THREE.Mesh(geo,material);
    terra.position.set(0,0,0);
    scene.add(terra);
  } //}}}
  
  function animate(){
    requestAnimationFrame(animate);
    t++;
    var geo = terra.geometry;
    for(var i=0; i<geo.vertices.length; i++){
      geo.vertices[i].z = 2*Math.sin(Math.sqrt(
        (Math.pow(Math.floor(i/100)-50,2)+ Math.pow(i%100 - 50,2))/10
      )- Math.PI*(t/50));
    }
    geo.verticesNeedUpdate = true;
    renderer.render(scene,camera);
    if (t==100){
      t=0;
    }
  }
})();
