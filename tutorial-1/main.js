//Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Harvester1' );

var _ = require('coolmodule');

console.log(_.testin); //to test if my import works

module.exports.loop = function ()
{

    var creep = Game.creeps['Harvester1'];

    if(creep.carry.energy < creep.carryCapacity)
    {//if (energy carried) < (what we can carry)
        var sources = creep.room.find(FIND_SOURCES);

        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE)
        {
            creep.moveTo(sources[0]);
        }
    }
    else
    {//we're full
        if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
        {//goto base
            creep.moveTo(Game.spawns['Spawn1']);
        }
    }


}
