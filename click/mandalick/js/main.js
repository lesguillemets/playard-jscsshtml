window.addEventListener('load', main);

function main(){
  init();
}

function init(){
  for (var key in peoples){
    if (peoples.hasOwnProperty(key)){
      var people = peoples[key];
      peopleSetUp(people);
    }
  }
}

function peopleSetUp(p){
  setTitles.people(p);
}

var setTitles = {
  people : function(p){
    var elm = document.getElementById(p.id);
    elm.title = p.description;
  }
};
