//Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Harvester1' );

// var _ = require('coolmodule');

var _ = require('helperfns');
var roleHarvester = require('role.harvester');
var spawnAutobirth = require('spawn.autobirth');

var closeEnergy = "CLOSE_ENERGY";

// console.log(_.testin); //to test if my import works

module.exports.loop = function()
{

    // var creep = Game.creeps['Harvester1'];
    //
    // roleHarvester.run(creep);

    spawnAutobirth.maintainPopulation(
        Game.spawns['Spawn1'], //spawn
        10,                     //how many

        [0.6,0.1,0.3],         //ratios

        [
          [WORK,CARRY,MOVE],
          [CARRY,CARRY,MOVE],  //body parts list
          [WORK,WORK,MOVE]
        ],
        "s1Creep"              //name prefix
      );
};
