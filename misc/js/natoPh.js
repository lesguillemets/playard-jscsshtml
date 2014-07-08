var NATOPhonetic = {
  'a' : 'alfa',    'b' : 'bravo',    'c' : 'charlie',
  'd' : 'delta',   'e' : 'echo',     'f' : 'foxtrot',
  'g' : 'golf',    'h' : 'hotel',    'i' : 'India'  ,
  'j' : 'juliett', 'k' : 'kilo',     'l' : 'lima'   ,
  'm' : 'mike',    'n' : 'november', 'o' : 'oscar'  ,
  'p' : 'papa',    'q' : 'quebec',   'r' : 'romeo'  ,
  's' : 'sierra',  't' : 'tango',    'u' : 'uniform',
  'v' : 'victor',  'w' : 'whiskey',  'x' : 'xray'   ,
  'y' : 'yankee',  'z' : 'zulu',     '-' : 'dash'
};

function encodeToNato(str){
  return str.toLowerCase().split('').map(
    function(s){ return ((s in NATOPhonetic) ? NATOPhonetic[s] : s);}
  ).join(' ');
}

function decodeFromNato(str){
  return str.split(' ').map(
    function(s){ return s[0]; }
  ).join(' ').toLowerCase();
}

function init(){
  document.getElementById("button").onclick = main;
}

function main(){
  var inText = document.getElementById("inText").value;
  var result = encodeToNato(inText);
  document.getElementById("outText").value += result;
}

window.onload = init;
