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
        var xyz = [acc.x,acc.y,acc.z].map(
          function(i){
            return (i + '').slice(0,8);
        });
        var gxyz = [acc_g.x,acc_g.y,acc_g.z].map(
          function(i){
            return (i + '').slice(0,8);
        });
        motionbox.innerHTML =
          'x: ' + xyz[0] + '<br>' + 'y: ' + xyz[1] + '<br>' + 'z: ' + xyz[2] + '<br>\n'
            + "gravity_________<br>\n"+
          'gx: ' + gxyz[0] + '<br>' + 'gy: ' + gxyz[1] + '<br>' + 'gz: ' + gxyz[2] + '<br>\n'
        motionbox.innerHTML += "<br>";
      }
    );
  }
}
