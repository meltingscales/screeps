var test = require('helperfns');

var roleHarvester =
{

  /** @param {Creep} creep **/
  run: function(creep)
  {
    if(creep.carry[RESOURCE_ENERGY] < creep.carryCapacity)
    {
      var sources = creep.room.find(FIND_SOURCES);

      if(creep.memory["closeEnergy"] == 1)

      if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE)
      {
        creep.moveTo(sources[0]);
      }
    }
  else
    {
      if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
      {
        creep.moveTo(Game.spawns['Spawn1']);
      }
    }
  }

};

module.exports = roleHarvester;