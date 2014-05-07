// calculator.

number = 0;
point = 0; // 0 means at the bottom.
is_int = true;

function NumPress(n){
  var display = document.getElementById("display");
  if (n != '.'){
    if (display.innerHTML == '0') {display.innerHTML=''}
    display.innerHTML += n;
    number = number*10 + parseInt(n);
    if (!is_int){
      point += 1;
    }
  }
  else {
    if (is_int) {
      display.innerHTML += n;
      is_int = false;
    }
  }
}

function ACPress(){
  number = 0;
  point = 0;
  is_int = true;
  DisplayNumber();
}

function DisplayNumber(){
  console.log(number);
  console.log(point);
  var displaynum = (number/Math.pow(10, point)).toString();
  if (!is_int && point == 0) {displaynum += '.';}
  document.getElementById("display").innerHTML = displaynum;
}
