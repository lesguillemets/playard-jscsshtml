var scene, camera, renderer;
var geometry, material, mesh;
var width = 800;
var height = 600;
var O = new THREE.Vector3(0,0,0);
var keyboardHandler;
var oneStepDistance = 0.1;
var oneStepRad = 0.005;
var oneStepFovRatio = 1.005;
var cubeSize = 0.1;
var ratio = 10;
var times = 100000;
var fern;
var destroy = false;

window.onload = main;

var initialVars = [
  [0,0,0.01,0,0.26,0,0,0,0.05,0,0,0],
  [0.2,-0.26,-0.01,0.23,0.22,-0.07,0.07,0,0.24,0,0.8,0],
  [-0.25,0.28,0.01,0.26,0.24,-0.07,0.07,0,0.24,0,0.22,0],
  [0.85,0.04,-0.01,-0.04,0.85,-0.09,0,0.08,0.84,0,0.8,0],
]

var probs = [0.85, 0.07, 0.07, 0.01];

function main(){
  init();
  animate();
}

function init(){
  systemInit();
  setInitialVars();
  scene = new THREE.Scene();
  setCamera();
  setLights();
  setFloor();
  fern = new Fern();
  fern.createFern(times);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.domElement.style.setProperty("display", "block");
  renderer.domElement.style.setProperty("margin-left", "auto");
  renderer.domElement.style.setProperty("margin-right", "auto");
  
  document.getElementById("display").appendChild(renderer.domElement);
}

function systemInit(){ //{{{
  keyboardHandler = new KeyboardHandler(feedKeyFunction);
  window.onkeydown = function(e){keyboardHandler.keyDown(e)};
  window.onkeyup = function(e){keyboardHandler.keyUp(e)};
} //}}}

// Fern {{{
function Fern() { // {{{
  this.valuesSet = false;
  this.pos = new THREE.Vector3(0.3,0.8,1);
  this.material = new THREE.ParticleBasicMaterial(
    {
    color: 0xc26c0a,
    size: cubeSize,
    }
  );
  this.dots = new THREE.Geometry();
  this.transformations = new Array();
  // m => THREE.Matrix3 , v => THREE.Vector3 -> [[m,v]]
}
//}}}

Fern.prototype.createFern = function(n){ //{{{
  if (!this.valuesSet){
    this.setValues();
  }
  for (var i=0; i<n; i++){
    this.plotDotHere();
    this.moveNext();
  }
  this.showMyself();
}
// }}}

Fern.prototype.setValues = function(){ // {{{
  this.transformations = new Array();
  for(var fn=0; fn<4; fn++){
    this.transformations.push(new Array());
    var m = new THREE.Matrix3();
    var v = new THREE.Vector3();
    for(var n=0; n<9; n++){
      m.elements[n] =
        parseFloat(
          document.getElementById("var"+fn+((n<10)? ("0"+n) : n)).value
        );
    }
    // aren't there anything like Vector.fromarray()?
    // yes there is.
    v.x = parseFloat(document.getElementById("var"+fn+"09").value);
    v.y = parseFloat(document.getElementById("var"+fn+"10").value);
    v.z = parseFloat(document.getElementById("var"+fn+"11").value);
    this.transformations[fn] = [m,v];
  }
  this.probs = new Array(probs.length);
  this.probs[0] = probs[0];
  for (var i=1; i<probs.length; i++){
    this.probs[i] = this.probs[i-1]+probs[i];
  }
};
// }}}

Fern.prototype.showMyself = function(){ // {{{
  var particles = new THREE.ParticleSystem(this.dots, this.material);
  scene.add(particles);
}
// }}}

Fern.prototype.plotDotHere = function(){ //{{{
  var p = this.pos.clone();
  p.multiplyScalar(ratio);
  this.dots.vertices.push(p);
};
// }}}

Fern.prototype.moveNext = function(){ // {{{
  var t = this.chooseTrans();
  this.pos.applyMatrix3(t[0]);
  this.pos.add(t[1]);
};
// }}}

Fern.prototype.chooseTrans = function(){ //{{{
  // :: () -> trans
  var r = Math.random();
  for (var i=0; i<this.probs.length; i++){
    if (r <= this.probs[i]){
      return this.transformations[i];
    }
  }
};
// }}}
// }}}

// World initialisors {{{

function setCamera(){ // {{{
  camera = new THREE.PerspectiveCamera(
    35, width/height, 1, 10000
  );
  camera.position.x = 10;
  camera.position.z = 10;
  camera.up = new THREE.Vector3(0,0,1);
  camera.rotation.order = "ZXY";
  camera.lookAt(O);
}
// }}}

function setLights(){ //{{{
  var light = new THREE.AmbientLight(0xaaaaaa);
  // soft white light
  scene.add(light);
}
// }}}

function setFloor(){ // {{{
  var bottomMat = new THREE.MeshBasicMaterial(
    {wireframe:true});
  var bottomGeo = new THREE.PlaneGeometry(500,500,64,64);
  var bottom = new THREE.Mesh(bottomGeo,bottomMat);
  bottom.position.z = -1;
  scene.add(bottom);
} //}}}

// }}}

// keyboard handling {{{

function feedKeyFunction(n){ //{{{
  switch (n){
    case 37: // Left : move Left
    case 72: // h : vi keybind
      camera.translateX(-oneStepDistance);
      break;
    case 38: // Up : move Forward
    case 75: // k : vi keybind
      camera.translateZ(-oneStepDistance);
      break;
    case 39: // Right : move Right
    case 76: // l : vi keybind
      camera.translateX(oneStepDistance);
      break;
    case 40: // Down : move Backword
    case 74: // j : vi keybind
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
    case 90: // z : zoom in
      camera.fov /= oneStepFovRatio;
      camera.updateProjectionMatrix();
      break;
    case 88: // x : zoom out
      camera.fov *= oneStepFovRatio;
      camera.updateProjectionMatrix();
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

// }}}

function setInitialVars(){
  for(var fn=0; fn<4; fn++){
    for(var n=0; n<12; n++){
      document.getElementById("var"+fn+((n<10)? ("0"+n) : n)).value =
        initialVars[fn][n];
    }
  }
}

function resetWorld(){
  destroy = true;
  scene = null;
  fern = null;
  scene = new THREE.Scene();
  // setCamera();
  setLights();
  setFloor();
  fern = new Fern();
  fern.createFern(times);
  destroy = false;
  animate();
}

function animate(){
  if(!destroy){
    keyboardHandler.process();
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
}
