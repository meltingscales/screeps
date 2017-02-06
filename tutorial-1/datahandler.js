var helperfns = require('helperfns');

var refresh = 7;
var refreshLong = 500;

var DEFAULT_MAX_POP = 10;
var DEFAULT_RATIOS_LIST = [0.6,0.3,0.1];
var DEFAULT_BODYTYPES_LIST = [[WORK,CARRY,MOVE],[CARRY,CARRY,MOVE],[WORK,WORK,MOVE]];

var poobyputt =
{


setIfEqualTo(item,comparingTo,toSet)
{
  if(item == comparingTo)
  {
    item = toSet;
  }
},


/**
  * @param {StructureSpawn} spawner
  * @param {string[]} toSpawnList
  * @returns {creep} 
  **/
processToSpawnList(spawner, toSpawnList)
{//processes a key-value pair of JSON.str(bodytype):howmanytospawn and returns a creep obj of what you should spawn
  if(spawner.memory.toSpawnList == undefined)
  {
    spawner.memory.toSpawnList = toSpawnList; //just in case
  }
  
    

},




/**
  * @param {StructureSpawn} spawner
  * @param {string[]} creepNames
  **/
rebuildCreepBodypartNumbers(spawner, creepNames) //returns a list of bodytypes from a spawner and list of creepnames.
{
  if(creepNames == undefined)
  {
    var creepNames = spawner.memory.creeps;
  }
  else
  {
    var creepNames = creepNames;
  }
  
  existingBodyparts = {};

  for(i = 0; i < creepNames.length; i++)
  {
    currBodyStr = JSON.stringify(Memory.creeps[creepNames[i]].body.sort());


    if(existingBodyparts[currBodyStr] == undefined)
    {
      console.log("existingBodyparts[Memory.creeps["+creepNames[i]+"].body == undefined, setting to 0. ")
      existingBodyparts[currBodyStr] = 0; //make key if doesn't exist
    }

    existingBodyparts[currBodyStr]++; //increment, for example, { [WORK,GATHER,MOVE] : 0 } by 1.
    console.log("found creep with name \'" + creepNames[i] + "\', bodytype " + currBodyStr + ",\n");
    console.log("existingBodyparts["+currBodyStr+"] is now " + existingBodyparts[currBodyStr]);
  }

  return existingBodyparts;
},

rebuildToSpawnList(spawner, maxPop, ratiosList, bodyPartsList)
{ //returns an object that tells you what bodytypes you need to spawn
  
  if(maxPop == undefined)
  {
    var maxPop = spawner.memory.spawnOptions["MAX_POP"];
    var ratiosList = spawner.memory.spawnOptions["RATIOS_LIST"];
    var bodyPartsList = spawner.memory.spawnOptions["BODYTYPES_LIST"];
  }
  
  console.log("\n\nrebuilding to-spawn list");
  console.log("Was passed " + spawner + ", " + maxPop + ", " + ratiosList + ", " + JSON.stringify(bodyPartsList));
  // console.log("spawner's spawned creeps = " + Memory.spawns[spawner.name].creeps.length );

  var currPop = Memory.spawns[spawner.name].creeps.length;

  var toSpawnList = {}; //a mathemagical combo of (ratios of bodytypes) and (max pop)

  for(i = 0; i < ratiosList.length; i++)
  {
    var currentBodytype = JSON.stringify(bodyPartsList[i].sort());

    toSpawnList[currentBodytype] = (Math.round(ratiosList[i] * maxPop)); //list of bodytypes we want. need to remove preexisting creeps from this...

    //removing already-existing bodytypes
    if(Memory.spawns[spawner.name].creepBodypartNumbers[currentBodytype] != undefined)
    {
      console.log("removing \'" + Memory.spawns[spawner.name].creepBodypartNumbers[currentBodytype] + "\' of type \'" + currentBodytype + "\'");
      toSpawnList[currentBodytype] = toSpawnList[currentBodytype] - Memory.spawns[spawner.name].creepBodypartNumbers[currentBodytype];
    }



    console.log("We want " + toSpawnList[currentBodytype] + " of bodytype \'" + bodyPartsList[i] + "\', sans present screeps.");
  }
  // console.log("\'\'\'"+JSON.stringify(toSpawnList).replace(/,\"/g,",\"\n")+"\'\'\'");
  return toSpawnList;


},

}

module.exports = poobyputt;
