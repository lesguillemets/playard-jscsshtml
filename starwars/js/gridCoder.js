function encodefromArray(ary){
  var flatList = [];
  var encoded = "";
  var buf, value;
  flatList = flatList.concat.apply(flatList, ary).concat([0,0]);
  // 63: ? to 126:~
  for (var i=0; i<flatList.length-2; i+=3){
    buf = flatList.slice(i,i+3);
    value = buf[0]*(4*4) + buf[1]*4 + buf[2]; // ugly
    encoded += String.fromCharCode(value+63);
  }
  return encoded
}

function decodeArray(code){
  var size = Math.floor(Math.sqrt(code.length * 3));
  var ary = new Array();
  for (var i=0; i<code.length-2; i+=3){
  }
}
