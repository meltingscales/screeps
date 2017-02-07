/*

// Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 's1Creep_0' );
// Memory.creeps['s1Creep_0'].body = [WORK, CARRY, MOVE];


// Memory.spawns[spawner.name]["creepBodypartNumbers"] = require('spawn.autobirth').rebuildCreepBodypartNumbers(Game.spawns['Spawn1'], ['s1Creep_0','s1Creep_1']);
// That sets a list of existing creep bodytypes.

// require('helperfns').resetMemory("I'M REALLY FUCKING SURE");

// console.log(require('spawn.autobirth').rebuildToSpawnList(Game.spawns['Spawn1'],10,[0.6,0.1,0.3],[[WORK,CARRY,MOVE],[CARRY,CARRY,MOVE],[WORK,WORK,MOVE]]));

// console.log(JSON.stringify(require('helperfns').weightedChoose([1,5,3],[1,5,3])));








*/






// var _ = require('coolmodule');

var helperfns = require('helperfns');

var role = require('role');

var birthHandler = require('birthhandler');

// console.log(_.testin); //to test if my import works

var creepArr = ["s1Creep_0","s1Creep_1","s1Creep_2","s1Creep_3"];
var creepArr2 = ["s1Creep_0","s1Creep_1","s1Creep_2","s1Creep_3"];

var harvesterBod = [WORK,CARRY,MOVE];
var moverBod = [CARRY,MOVE,MOVE];

var Spawn1 = Game.spawns["Spawn1"];

module.exports.loop = function()
{
  for(i = 0; i < creepArr2.length; i++)
  {
    if(Game.creeps[creepArr2[i]] != undefined)
    {
      role.run(Game.creeps[creepArr2[i]],"HARVESTER");
    }
  }
  
  Spawn1.maintainPopulation([harvesterBod,moverBod],[7,3],"spawn1Creep_");
  
  


  if(Game.time % 20 == 0)
  {
    for(i = 0; i < creepArr.length; i++)
    {
      if(Spawn1.birthCreep([WORK, CARRY, MOVE],creepArr[i]) == OK) //birth creep
      {
        creepArr[i] = "";//argh
      };
    }
  }
  // console.log(helperfns.randomItem(["1","2","3"]));
  // console.log(helperfns.rand(3,5));

  // helperfns.runEvery(function(){console.log();},1);
};
