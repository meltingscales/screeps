var test = require('helperfns');
var moveList = [TOP_RIGHT,BOTTOM_RIGHT,BOTTOM_LEFT,TOP_LEFT];
var idx = 0;

var roleBuilder = //actually doesn't do shit
{
  /** @param {Creep} creep **/
  run(creep)
  {
    if(creep.memory["ROLE"] == undefined)
    {
      creep.memory["ROLE"] = "BUILDER";
    }
    
    if(creep.memory["wedonedidit"] == undefined)
    {
      creep.move(LEFT);
      creep.memory["wedonedidit"] = "ohyeah";
    }
    
    if(creep.memory["wedonedidit"] == "ohyeah")
    {
      creep.move(LEFT);
      creep.memory["wedonedidit"] = "indeed";
    }
    
    
    
    
    if((Game.time % 5 == 0) && (creep.memory["wedonedidit"] == "indeed"))
    {
      creep.move(moveList[idx]);
      idx++;
    }
    
    if(idx > moveList.length-1)
    {
      idx = 0;
    }

  }
}

module.exports = roleBuilder;
