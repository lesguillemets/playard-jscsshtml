window.addEventListener('load', init);

function init(){
  if (window.DeviceOrientationEvent !== undefined){
    document.getElementById('orient_issupported').innerHTML =
      "DeviceOrientationEvent Supported.";
    var orientbox = document.getElementById('orient_inner');
    window.addEventListener(
      "deviceorientation",
      function(e){
        var a_ = (e.alpha + '').slice(0,8);
        var b_ = (e.beta + '').slice(0,8);
        var g_ = (e.gamma + '').slice(0,8);
        orientbox.innerHTML = 'alpha' + a_ + '\n' + 'beta'+b_ + '\n' + 'gamma'+g_;
      }
    );
  }
  if (window.DeviceMotionEvent !== undefined){
    document.getElementById('motion_issupported').innerHTML =
      "DeviceMotionEvent Supported.";
    var motionbox = document.getElementById('motion_inner');
    window.addEventListener(
      "devicemotion",
      function(e){
        var acc = e.acceleration;
        var acc_g = e.accelerationIncludingGravity;
        var x,y,z = [acc.x,acc.y,acc.z].map(
          function(i){
            return (i + '').slice(0,8);
        });
        var gx,gy,gz = [acc_g.x,acc_g.y,acc_g.z].map(
          function(i){
            return (i + '').slice(0,8);
        });
        motionbox.innerHTML =
          x + '\n' + y + '\n' + z + '<br>\n'
            + "gravity_________<br>\n"+
          gx + '\n' + gy + '\n' + gz;
        motionbox.innerHTML += "<br>";
      }
    );
  }
}
