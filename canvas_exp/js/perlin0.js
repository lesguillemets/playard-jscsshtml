var perlin;
// PerlinGrid {{{
function PerlinGrid(x0,x1, y0,y1, g0,g1,g2,g3){
/*
//     PerlinGrid:
//
//         (x0,y1)                  (x1,y1)
//         --------------------------
//         | Grad:g3                | Grad:g2
//         |                        |
//         |   u                v   |
//         |                        |
//         |      *(x,y)            |
//         |                        |
//         |                        |
//         |   s                t   |
//         |                        |
//         | Grad:g0                | Grad:g1
//         -------------------------- (x1, y0)
//         (x0, y0)
*/
  this.x0 = x0;
  this.x1 = x1;
  this.y0 = y0;
  this.y1 = y1;
  this.g0 = g0;
  this.g1 = g1;
  this.g2 = g2;
  this.g3 = g3;
}

PerlinGrid.prototype.noiseAt = function(x,y){
  var s = innerProd([x-this.x0, y-this.y0], this.g0);
  var t = innerProd([x-this.x1, y-this.y0], this.g1);
  var u = innerProd([x-this.x0, y-this.y1], this.g3);
  var v = innerProd([x-this.x1, y-this.y1], this.g2);
  var sx0 = easeMean(s,t, x-this.x0);
  var sx1 = easeMean(u,v, x-this.x0);
  return easeMean(sx0, sx1, y - this.y0);
};

PerlinGrid.prototype.getVectors = function(){
  return [this.g0, this.g1, this.g2, this.g3];
};
// }}}

// PerlinNoise {{{
function PerlinNoise(gridWidth, gridHeight,horizontalGrids, verticalGrids){
  this.gWidth = gridWidth;    // int
  this.gHeight = gridHeight;  // how many pixels are taken from one grid?
  this.sqW = 1.0/gridWidth;
  this.sqH = 1.0/gridHeight;
  this.hGrids = horizontalGrids; //int
  this.vGrids = verticalGrids; //how many grids make up the image?
  this.imgAry = new Array();
  for (var i=0; i<gridHeight*verticalGrids; i++){
    this.imgAry.push(new Array(gridWidth*horizontalGrids));
  }
  this.setLattice();
}

PerlinNoise.prototype.setCanv = function(name){
  this.canv = document.getElementById(name);
  this.ctx = this.canv.getContext('2d');
};

PerlinNoise.prototype.setLattice = function(){
  this.lat = new Array();
  for (var y=0; y<this.vGrids+1; y++){
    var row = new Array();
    for (var x=0; x<this.hGrids+1; x++){
      row.push(randomGrad());
    }
    this.lat.push(row);
  }
};

PerlinNoise.prototype.gatherData = function(){
  for (var x=0;x<this.hGrids; x++){
    for(var y=0; y<this.vGrids;y++){
      this.gatherGridData(x,y);
    }
  }
};

PerlinNoise.prototype.gatherGridData = function(x,y){
  var thisgrid = new PerlinGrid(0, 0, 1, 1,
                    this.lat[y][x], this.lat[y][x+1],
                    this.lat[y+1][x+1], this.lat[y+1][x]);
  for (var n=0; n<this.gWidth; n++){
    for (var m=0; m<this.gHeight; m++){
      this.imgAry[this.gHeight*y + m][this.gWidth*x +n] = (
        thisgrid.noiseAt(this.sqW*(0.5+n), this.sqH*(0.5+m)) )
    }
  }
};

PerlinNoise.prototype.draw = function(){
  var min=this.imgAry[0][0];
  var max=this.imgAry[0][0];
  for (var n=0; n<this.imgAry.length; n++){
    for(var m=0; m<this.imgAry[0].length; m++){
      var currentPix = this.imgAry[n][m];
      min > currentPix ? min=currentPix: false;
      max < currentPix ? max=currentPix: false;
    }
  }
  for (var n=0; n<this.imgAry.length; n++){
    for(var m=0; m<this.imgAry[0].length; m++){
      var tc = (this.imgAry[n][m] = Math.floor(
        (this.imgAry[n][m] - min)*255 / max));
      this.ctx.fillStyle = "rgb(" + tc + ',' + tc + ',' + tc + ')';
      this.ctx.fillRect(n,m,1,1);
    }
  }
}

// }}}

// helpers {{{
function innerProd(v0,v1){
  var p = 0;
  for (var i=0; i<v0.length; i++){
    p += v0[i]*v1[i];
  }
  return p;
}

function easeMean(s,t,x){
  // 0 <= x <= 1, s, t is the weights.
  return s + (t-s)*easeCurve(x);
}

function easeCurve(p){
  return 3*p*p - 2*p*p*p;
}

function randomGrad(dim){
  if(typeof dim === 'undefined'){ dim = 2; }
  var vect = new Array(dim);
  // create random vector of dim-th dimention.
  for( var i=0; i<dim; i++){
    vect[i] = Math.random() - 0.5;
  }
  
  // find its length
  var len = 0;
  for (var i=0; i<dim; i++){
    len += vect[i]*vect[i];
  }
  len = Math.sqrt(len);
  
  // normalize
  for (var i=0; i<dim; i++){
    vect[i] /= len;
  }
  return vect;
}
// }}}


function main(){
  var gridwidth = 50;
  var gridheight = 50;
  var cnv = document.getElementById('canv');
  var horizontalGrids = 10;
  var verticalGrids = 10;
  perlin = new PerlinNoise(gridwidth, gridheight, 
                         horizontalGrids, verticalGrids);
  perlin.setCanv('canv');
  perlin.gatherData()
  perlin.draw()
}

function init(){
  document.getElementById('button').onclick = main;
}

window.onload = init;
