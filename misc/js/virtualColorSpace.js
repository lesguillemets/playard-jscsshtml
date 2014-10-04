// require : colorTools.js
(function(){
  window.addEventListener('load', init);
  
  function init(){
    setColor(123,141,222);
    if (window.DeviceOrientationEvent !== undefined){
      window.addEventListener(
        "deviceorientation",
        update
      );
    }
  }
  
  function setColor(r,g,b){
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
  }
  
  function update(e){
    var h = Math.floor(e.alpha); // 0 <= h <= 360
    var v = betaToValue(e.beta);
    var s = gammaToSat(e.gamma);
    var rgb = HSVtoRGB(h,s,v);
    setColor(rgb.r, rgb.g, rgb.b);
    
    document.body.innerHTML = 
      show_abg(e) + show_hvs(h,v,s) + show_rgb(rgb);
  }
  
  function betaToValue(b){
    return Math.abs(Math.abs(b)-90)/90;
  }
  
  function gammaToSat(g){
    return Math.abs(Math.abs(g)-90)/90;
  }
  
  function show_abg(e){
    var a = ('' + e.alpha).slice(0,5);
    var b = ((e.beta<0? '-': '&nbsp;') + Math.abs(e.beta)).slice(0,5);
    var g = ((e.gamma<0? '-': '&nbsp;') + Math.abs(e.gamma)).slice(0,5);
    return (
      "alpha: " + a + "<br>" +
      "beta:  " + b + "<br>" +
      "gamma: " + g + "<br>"
    );
  }
  
  function show_hvs(h,v,s){
    return (
      "h: " + h + "<br>" +
      "v: " + (''+v).slice(0,5) + "<br>"+
      "s: " + (''+s).slice(0,5) + "<br>"
    );
  }
  
  function show_rgb(rgb){
    return ("rgb: " + rgb.r + ',' + rgb.g + ',' + rgb.b);
  }
})();
