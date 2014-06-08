var scene, camera, renderer;
var material
var basePattern = [[0,2,1],[2,1,0],[1,0,2]];
// var basePattern = [[0,1],[1,0]];
var maxLevel = 3;
var cubeSize = 5;

window.onload = main

function main(){
  init();
  animate();
}

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    700, window.innerWidth/window.innerHeight, 1, 10000
  );
  camera.position.x = 200;
  camera.position.y = 200;
  camera.position.z = 200;
  camera.lookAt(new THREE.Vector3(0,0,0));
  var cubes = buildiCube(maxLevel-1);
  for(var x=0; x<cubes.size; x++){
    for(var y=0; y<cubes.size; y++){
      var cube = new THREE.Mesh(
        new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize),
        new THREE.MeshBasicMaterial(
          {color: HSVtoRGBNum(cubes.grid[x][y]/cubes.size,1,1),
            wireframe:false}
        )
      );
      cube.position.x = x*cubeSize;
      cube.position.y = y*cubeSize;
      cube.position.z = cubes.grid[x][y]*cubeSize;
      
      scene.add(cube);
    }
  }
  renderer = new THREE.CanvasRenderer();
  renderer.setClearColorHex(0x000000, 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  alert("done");
}

function animate(){
  requestAnimationFrame(animate);
  camera.position.x += 5;
  camera.position.y -= 10;
  camera.lookAt(new THREE.Vector3(27*cubeSize/2,27*cubeSize/2,27*cubeSize/2));
  renderer.render(scene,camera);
}
function buildiCube(n){
  var myCubeGrid = new ICubeGrid(basePattern);
  for (var i=0; i<n; i++){
    // (3**(n+1))**2 cubes
    myCubeGrid.zoom();
  }
  return myCubeGrid;
}

function ICubeGrid(basePattern) {
  this.basePattern = basePattern;
  this.n = basePattern.length;
  this.level = 1;
  this.size = this.n;
  this.grid = new Array(this.n);
  for (var i=0; i<this.n; i++){
    this.grid[i] = new Array(this.n);
    for (var j=0; j<this.n; j++){
      this.grid[i][j] = basePattern[i][j];
    }
  }
}

ICubeGrid.prototype.zoom = function(){
  var newGrid = new Array(this.size*this.n);
  for (var i=0; i<this.size*this.n; i++){
    newGrid[i] = new Array(this.size*this.n);
  }
  for(var px=0; px<this.n; px++){
    for(var py=0; py<this.n; py++){
      for(var x=0; x<this.size; x++){
        for(var y=0; y<this.size; y++){
          newGrid[px*this.size+x][py*this.size+y]
            = this.grid[x][y] + this.size*this.basePattern[px][py];
        }
      }
    }
  }
  this.level++;
  this.size*=this.n;
  this.grid = newGrid;
}

function HSVtoRGBNum(h, s, v) {
  // h,s,v => String
  // 0<=h,s,v<=1
  var r, g, b, i, f, p, q, t;
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }
  return (
    Math.floor(r * 255 *(256*256)) +
    Math.floor(g * 255 *(256)) +
    Math.floor(b * 255));
}
