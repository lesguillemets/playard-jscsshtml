// the main idea is from "html5 hacks" from o'reilly.
function init(){
  var balls = document.querySelectorAll('.ball');
  for (var i=0; i<balls.length; i++){
    balls[i].addEventListener('dragstart', startDrag, false);
    balls[i].addEventListener('dragend', endDrag, false);
  }
  var cells = document.querySelectorAll('.cell');
  for (var i=0; i<cells.length; i++){
    cells[i].addEventListener(
      'dragover', function(e){e.preventDefault();}
    );
    cells[i].addEventListener('drop',dropit,false);
  }
}

function startDrag(e){
  this.style.border = '1px solid black';
  e.dataTransfer.setData("text", this.className);
  console.log(e.dataTransfer.getData('text'));
}

function endDrag(e){
  console.log(e);
  this.style.border = '';
}

function dropit(e){
  e.preventDefault();
  var myBall = document.querySelector(
    '.balls .' + e.dataTransfer.getData('text').split(' ').join('.')
  );
  this.appendChild(myBall,false);
}

window.onload = init;
