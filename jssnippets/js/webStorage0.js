window.addEventListener("load", main);

function main(){
  console.log('foo');
  setUp();
}

function setUp(){
  var stack = document.getElementById("stored");
  
  function addItem(string){
    // nicer handling
    var node = document.createElement("li");
    node.innerHTML = string.replace('<','&lt;').replace('>','&gt;');
    stack.appendChild(node);
  }
  
  if (localStorage.count){
    var count = Number(localStorage.count);
    for (var i=0; i<count; i++){
      var datum = localStorage['data'+i] || "";
      addItem(datum);
    }
  }
  else {
    var count = 0;
    localStorage.count = count;
  }
  
  var intext = document.getElementById("inText");
  function remember(){
    var data = intext.value;
    addItem(data);
    intext.value = "";
    localStorage['data'+count] = data;
    count++;
    localStorage.count = count;
  }
  document.getElementById('remember').addEventListener('click', remember);
  
  function clearMemory(){
    localStorage.removeItem('count');
    for (var i=0; i<count; i++){
      localStorage.removeItem('data'+i);
    }
    count = 0;
    while (stack.firstChild){
      stack.removeChild(stack.firstChild);
    }
  }
  document.getElementById('clear').addEventListener('click',clearMemory);
}
