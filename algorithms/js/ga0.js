function main(){
  var tbl = document.getElementById("results");
  var newrow = tbl.insertRow(1);
  var c0 = newrow.insertCell(0);
  var c1 = newrow.insertCell(1);
  var c2 = newrow.insertCell(2);
  var c3 = newrow.insertCell(3);
  c0.innerHTML = Math.random();
  c1.innerHTML = Math.random();
  c2.innerHTML = Math.random();
  c3.innerHTML = Math.random();
}
