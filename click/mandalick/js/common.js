function Effects(unlocks, outputEffects){
  if (unlocks === undefined){
    unlocks = {
      actors : [], searches : [], facilities : []
    };
  }
  
  if (outputEffects === undefined){
    outputEffects = {
      multipliers : {}, additions : {}
    };
  }
  
  this.unlocks = unlocks;
  this.outputEffects = outputEffects;
}

Effects.prototype.addUnlock = function(kind, name){
  this.unlocks[kind].push(name);
};
Effects.prototype.addOutputEffects = function(kind, stuff, value){
  this.outputEffects[kind][stuff] = value;
};
Effects.prototype.setUnlocks = function(unlocks){
  this.unlocks = unlocks;
};
Effects.prototype.setOutputEffects = function(outputEffects){
  this.outputEffects = outputEffects;
};

function BaseOutput(virtue, money){
  this.virtue = virtue;
  this.money = money;
}

function BaseCost(virtue, money){
  this.virtue = virtue;
  this.money = money;
}

BaseCost.prototype.nthCost = function(n){
  return {
    virtue : this.virtue * (Math.pow(n,1.2)),
    money : this.money * (Math.pow(n,1.2))
  };
};
