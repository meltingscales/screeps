/*

// Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 's1Creep_0' );
// Memory.creeps['s1Creep_0'].body = [WORK, CARRY, MOVE];


// Memory.spawns[spawner.name]["creepBodypartNumbers"] = require('spawn.autobirth').rebuildCreepBodypartNumbers(Game.spawns['Spawn1'], ['s1Creep_0','s1Creep_1']);
// That sets a list of existing creep bodytypes.


// console.log(require('spawn.autobirth').rebuildToSpawnList(Game.spawns['Spawn1'],10,[0.6,0.1,0.3],[[WORK,CARRY,MOVE],[CARRY,CARRY,MOVE],[WORK,WORK,MOVE]]));









*/



// var _ = require('coolmodule');

var helperfns = require('helperfns');
var roleHarvester = require('role.harvester');
var spawnAutobirth = require('spawn.autobirth');

var closeEnergy = "CLOSE_ENERGY";

// console.log(_.testin); //to test if my import works

module.exports.loop = function()
{

  if(Game.creeps['s1Creep_0'] != undefined)
  {
    var creep = Game.creeps['s1Creep_0'];
    roleHarvester.run(creep);
  }

  if(Game.creeps['s1Creep_1'] != undefined)
  {
    var creep2 = Game.creeps['s1Creep_1'];
    roleHarvester.run(creep2);
  }

    helperfns.runEvery(
    function(){spawnAutobirth.rebuildToSpawnList(
        Game.spawns['Spawn1'], //spawn
        15,                     //how many we want to spawn

        [0.6,0.1,0.3],         //ratios of bodyparts

        [
          [WORK,CARRY,MOVE],
          [CARRY,CARRY,MOVE],  //body parts list
          [WORK,WORK,MOVE]
        ]
      );},
      6
    );

    helperfns.runEvery(function(){console.log();},2);
};
