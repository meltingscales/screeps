/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('coolmodule');
 * mod.thing == 'a thing'; // true
 */

var testin = Game.creeps["ass"];

module.exports =
{

  function creepHas(aCreep,resource)
  {
    switch(resource)
    {
      case RESOURCE_ENERGY:
        return aCreep.carry.energy;

      default:
        return "oh fuck";

    }

  }


  function maintainCreepAmount()

  function notYetFull(creep, resource)
  {
    if(resource == RESOURCE_ENERGY)
    {

    }

    return "bah";
  }
};
