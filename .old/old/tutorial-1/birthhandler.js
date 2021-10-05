var helperfns = require('helperfns');
var datahandler = require('datahandler');

var stale = 500;





/**
  * @extends {StructureSpawn.createCreep} and also extends StructureSpawn...
  * @param {StructureSpawn} spawner
  **/
Spawn.prototype.birthCreep = function(body,name,memory)
{
  if(name == undefined)
  {
    console.log("Attempted to create UNNAMED creep with body \'" + JSON.stringify(body) + "\'");
    return;
  }

  if(this.memory.spawnStarted == undefined){this.memory.spawnStarted = 0;}
  if(this.memory.spawnDelay == undefined){this.memory.spawnDelay = 0;}

  var tmp = this.canCreateCreep(body,name,memory);




  if((tmp == OK) && (this.memory.spawning == undefined))
  {//if we can spawn, still have to check the time...


    if((this.memory.spawnStarted + this.memory.spawnDelay) >= Game.time)
    {
      console.log("Not creating creep \'" + name + "\' with body " + JSON.stringify(body) + "because it's too soon!!!");
    }
    else
    {
      this.memory.spawnStarted = Game.time;
      this.memory.spawnDelay = (body.length * 3) + 1; //just to be sure

      console.log("Creating creep \'" + name + "\' with body " + JSON.stringify(body))

      Memory.creeps[name] = {};
      this.createCreep(body,name,memory);

      if(this.memory.creeps == undefined){this.memory.creeps = []}; //set if doesn't exist
      this.memory.creeps.push(name);

      Memory.creeps[name].body = body;
    }
  }
  else
  {
    console.log("Failed to create \'" + name + "\' with body \'" + + "\' because " + helperfns.resolveError(tmp));
  }

  return tmp;

}

/**
  * @extends {StructureSpawn}
  * @param {creep.body[]} bodytypes A list of creep.body objects to maintain
  * @param {int[]} bodyTypesPop How many of each type to maintain
  * @param {string} nameTemplate A prefix for the name of creeps that shall be made.
  **/
Spawn.prototype.maintainPopulation = function(bodytypes,bodyTypesPop,nameTemplate)
{
  console.log("Should be maintaining " + bodyTypesPop.reduce(function(a,b){return a+b;}) + " creeps...");

  // console.log(JSON.stringify(this.memory));

  if(this.memory.bodytypes == undefined){this.memory.bodytypes = {}; this.memory['bodytypes.freshness'] = 0;};
  
  if((this.memory['bodytypes.freshness'] + stale) < Game.time) //
  {
    this.memory.bodytypes = datahandler.rebuildBodytypes(this.memory.creeps);
    this.memory['bodytypes.freshness'] = Game.time;
  }
  
  
  
}








var exportsDude =
{
  

}

module.exports = exportsDude;
