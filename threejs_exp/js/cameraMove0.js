var scene, camera, renderer;
var keyboardHandler;
var oneStepDistance = 1;
var oneStepRad = 0.01;
var O = new THREE.Vector3(0,0,0);
var walls = new Array();
var roomFloor;
var bottom;
var floorSize = 200;
var boxes = [];

window.onload = main;

function main(){ //{{{
  init();
  mainLoop();
}//}}}

function init(){//{{{
  worldInit();
  systemInit();
} //}}}

function mainLoop(){ //{{{
  keyboardHandler.process();
  renderer.render(scene,camera);
  requestAnimationFrame(mainLoop);
} //}}}

function systemInit(){ //{{{
  keyboardHandler = new KeyboardHandler(feedKeyFunction);
  window.onkeydown = function(e){keyboardHandler.keyDown(e)};
  window.onkeyup = function(e){keyboardHandler.keyUp(e)};
} //}}}

function worldInit(){ //{{{
  scene = new THREE.Scene();
  setCamera();
  setFloor();
  setWorld();
  setLights();
  
  renderer = Detector.webgl? new THREE.WebGLRenderer(): new THREE.CanvasRenderer();
  //renderer = Detector.webgl? new THREE.WebGLRenderer({preserveDrawingBuffer: true}): new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMapEnabled = true;
  renderer.render(scene,camera);
  
  document.body.appendChild(renderer.domElement);
} //}}}

function feedKeyFunction(n){ //{{{
  switch (n){
    case 37: // Left : move Left
      camera.translateX(-oneStepDistance);
      break;
    case 38: // Up : move Forward
      camera.translateZ(-oneStepDistance);
      break;
    case 39: // Right : move Right
      camera.translateX(oneStepDistance);
      break;
    case 40: // Down : move Backword
      camera.translateZ(oneStepDistance);
      break;
    case 87: // w : look Up
      camera.rotation.x += oneStepRad;
      break;
    case 68: // d : look Right
      camera.rotation.z -= oneStepRad;
      break;
    case 83: // s : look Down
      camera.rotation.x -= oneStepRad;
      break;
    case 65: // a : look up
      camera.rotation.z += oneStepRad;
      break;
    case 48: // 0 : look at the Origin
      camera.lookAt(O);
  }
} //}}}

function KeyboardHandler(feedKeyFunction){ //{{{
  this.keyCodes = [];
  this.keysOncePressed = [];
  this.isShiftPressed = false;
  this.feedKeyFunction = feedKeyFunction;
  // feedkeyfunction :: Int -> Action
}

KeyboardHandler.prototype.keyDown = function(e){
    this.keyCodes[e.keyCode] = true;
    if(e.keycode === 16){
      this.isShiftPressed = true;
    }
};

KeyboardHandler.prototype.keyUp = function(e){
  this.keyCodes[e.keyCode] = false;
  this.keysOncePressed[e.keyCode] = true;
  if(e.keycode === 16){
    this.isShiftPressed = false;
  }
};

KeyboardHandler.prototype.process = function(){
  var l = this.keyCodes.length > this.keysOncePressed.length ?
    this.keyCodes.length: this.keysOncePressed.length;
  for(var i=0; i<l; i++){
    if (this.keyCodes[i] || this.keysOncePressed[i]){
      this.feedKeyFunction(i);
    }
  }
  this.keysOncePressed = new Array();
};
// }}}

// worldSetter {{{

function setFloor(){ // {{{
  var floorMat = new THREE.MeshLambertMaterial(
    {color: 0xc26c0a});
  var floorGeo = new THREE.PlaneGeometry(floorSize,floorSize);
  roomFloor = new THREE.Mesh(floorGeo,floorMat);
  roomFloor.receiveShadow = true;
  scene.add(roomFloor);
  
  var spm = new THREE.MeshBasicMaterial({color:0x88cc44});
  var spg = new THREE.SphereGeometry(2, 8, 8);
  var sphere = new THREE.Mesh(spg, spm);
  scene.add(sphere);
  
  var bottomMat = new THREE.MeshBasicMaterial(
    {wireframe:true});
  var bottomGeo = new THREE.PlaneGeometry(500,500,64,64);
  bottom = new THREE.Mesh(bottomGeo,bottomMat);
  bottom.position.z = -1;
  scene.add(bottom);
} //}}}

function setLights(){ //{{{
  var light = new THREE.AmbientLight(0x404040);
  // soft white light
  scene.add(light);
  var light = new THREE.DirectionalLight(0x555511,2);
  light.position.x = -20;
  light.position.y = -20;
  light.position.z = 70;
  light.castShadow = true;
  light.shadowDarkness = 0.8;
  light.shadowMapWidth = 4096;
  light.shadowMapHeight = 4096;
  scene.add(light);
  var light = new THREE.DirectionalLight(0x55ff11,1);
  light.position.x = 20;
  light.position.y = 20;
  light.position.z = 120;
  light.castShadow = true;
  light.shadowDarkness = 0.3;
  light.shadowMapWidth = 4096;
  light.shadowMapHeight = 4096;
  light.shadowCameraVisible = true;
  light.lookAt(new THREE.Vector3(0,0,0));
  scene.add(light);
} // }}}

function setWorld(){ //{{{
  var mat = new THREE.MeshLambertMaterial();
  var boxG = new THREE.BoxGeometry(3,3,3);
  var box;
  for (var i=0; i<20; i++){
    for (var j=0; j<20; j++){
      box = new THREE.Mesh(boxG,mat);
      box.position.x = 10*i - 100;
      box.position.y = 10*j - 100;
      box.position.z = 30;
      box.castShadow = true;
      boxes.push(box);
    }
  }
  for(var i=0; i<boxes.length; i++){
    scene.add(boxes[i]);
  }
} //}}}

function setCamera(){ //{{{
  camera = new THREE.PerspectiveCamera(
    45, window.innerWidth/window.innerHeight, 1, 10000
  );
  camera.position.x = 220;
  camera.position.y = 0;
  camera.position.z = 80;
  camera.up = new THREE.Vector3(0,0,1);
  camera.rotation.order = "ZXY";
  camera.lookAt(new THREE.Vector3(0,0,10));
} //}}}

// }}}
