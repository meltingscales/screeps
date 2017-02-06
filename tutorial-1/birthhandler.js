var helperfns = require('helperfns');

/**
  * @extends {StructureSpawn.createCreep} and also extends StructureSpawn...
  * @param {StructureSpawn} spawner
  **/
Spawn.prototype.birthCreep = function(body,name,memory)
{
  var tmp = this.canCreateCreep(body,name,memory);

  if(tmp == OK)
  {
    this.createCreep(body,name,memory);
    this.memory.creeps.push(name);

    if(Game.memory[name] == undefined)
    {
      Game.memory[name] = {};

      if(memory != undefined)
      {
        Game.memory[name] = memory;
      }

      Game.memory[name].body = body;
    }

  }
  else
  {
    console.log("Failed to create \'" + name + "\' with body \'" + + "\' because " + helperfns.resolveError(tmp));
  }

  console.log("IT WORKS");



}









var exportsDude =
{





}


module.exports = exportsDude;
