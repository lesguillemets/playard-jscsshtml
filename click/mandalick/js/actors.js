
function BaseOutput(virtue, money){
  this.virtue = virtue;
  this.money = money;
}

function BaseCost(virtue, money){
  this.virtue = virtue;
  this.money = money;
}

function People(name, id, baseOutput, cost, population,
                unlocked, description){
  this.name = name;
  this.id = id;
  this.baseOutput = baseOutput;
  this.baseCost = cost;
  this.population = population || 0;
  this.unlocked = unlocked || false;
  this.description = description || "";
}

People.prototype.addToPopulation = function(n){
  this.population += n;
};

People.prototype.incrimentPopulation = function(){
  this.population += 1;
};

var peoples = {
  parish : new People(
    "信徒", "parish", new BaseOutput(0,5), new BaseCost(0,0),
    1, true,
    "信徒．お賽銭を出すなどしますが，自身で徳を生み出すことはありません．"
  ),
  
  street : new People(
    "虚無僧", "street", new BaseOutput(2,1), new BaseCost(0,10),
    0, false,
    "虚無僧．街で修行し，徳とともにいくらかお金も得ます．"
  ),
  
  mountain : new People(
    "山伏", "mountain", new BaseOutput(3,0), new BaseCost(0,10),
    0, false,
    "山伏．山で修行し，より多い徳を積みます．"
  )
};
