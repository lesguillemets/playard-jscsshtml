window.onload = setup;

function setup(){
  // setup cities (click to draw){{{
  var cities = document.getElementsByTagName("input");
  for (var i=0; i<cities.length; i++){
    var city = cities[i];
    city.onclick = function(e){
      handleGraph(e);
      return;
    };
  }
  
  // }}}
  
  // setup prefs (hide){{{
  var prefs = document.getElementsByClassName("pref");
  for (var i=0; i<prefs.length; i++){
    var pref = prefs[i];
    pref.style.display="none";
  }
  // }}}
  
  // setup districts (click to toggle prefs visibilities){{{
  var districts = document.getElementsByClassName("district");
  for (var i=0; i<districts.length; i++){
    var district = districts[i];
    district.onclick = function(e){
      e.target.isOpen = ! e.target.isOpen
      var prefs = e.target.getElementsByClassName("pref");
      var displayValue;
      if (e.target.isOpen){ displayValue="initial"; }
      else {displayValue="none";}
      
      for (var i=0; i<prefs.length; i++){
        prefs[i].style.display = displayValue;
      }
    };
  }
  // }}}
}

function handleGraph(e){
  var cityname = e.target.value;
  if (!e.target.checked){
    // hide graph
    return;
  }
  else {
    // else : draw graph
  }
}
