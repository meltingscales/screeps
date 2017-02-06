var helperfns = require('helperfns');

var refresh = 7;
var refreshLong = 500;

var DEFAULT_MAX_POP = 10;
var DEFAULT_RATIOS_LIST = [0.6,0.3,0.1];
var DEFAULT_BODYTYPES_LIST = [[WORK,CARRY,MOVE],[CARRY,CARRY,MOVE],[WORK,WORK,MOVE]];

var poobyputt =
{


/**
  * @param {StructureSpawn} spawner
  * @param {string[]} toSpawnList
  * @return {creep.body}
  **/
processToSpawnList(spawner, toSpawnList)
{//processes a key-value pair of JSON.str(bodytype):howmanytospawn and returns a body obj of what you should spawn
  if(toSpawnList == undefined)
  {
    var toSpawnList = spawner.memory.toSpawnList;
  }



  console.log("Processing to-spawn list to return a single creep body object...");

  var toSpawnListKeys = Object.keys(toSpawnList);
  for(i = 0; i<toSpawnListKeys.length; i++)
  {
    console.log("looking at key \'"+toSpawnListKeys[i]+"\'");
  }


  return choice;

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


  if(existingBodyparts.bodyType == undefined)
  {
    existingBodyparts.bodyType = [];
  }

  if(existingBodyparts.bodyTypeN == undefined)
  {
    existingBodyparts.bodyTypeN = [];
  }


  for(i = 0; i < creepNames.length; i++)
  {
    currBody = Memory.creeps[creepNames[i]].body.sort();

    if(existingBodyparts.bodyType[i] == undefined)
    {
      console.log("existingBodyparts.bodyType[i] == undefined, setting to " + currBody);
      existingBodyparts.bodyType[i] = currBody; //make key if doesn't exist
    }

    if(existingBodyparts.bodyTypeN[i] == undefined)
    {
      console.log("existingBodyparts.bodyTypeN[i] == undefined, setting to 0. ");
      existingBodyparts.bodyTypeN[i] = 0;
    }

    existingBodyparts.bodyTypeN[i]++; //increment, for example, { [WORK,GATHER,MOVE] : 0 } by 1.
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
    var currentBodytype = bodyPartsList[i].sort();

    toSpawnList.bodyType[i] = currentBodytype;
    toSpawnList.bodyTypeN[i] = (Math.round(ratiosList[i] * maxPop)); //list of bodytypes we want. need to remove preexisting creeps from this...

    //removing already-existing bodytypes
    if(Memory.spawns[spawner.name].creepBodypartNumbers[currentBodytype] != undefined)
    {
      console.log("removing \'" + Memory.spawns[spawner.name].creepBodypartNumbers[currentBodytype] + "\' of type \'" + currentBodytype + "\'");
      toSpawnList.bodyTypeN = toSpawnList.bodyTypeN - Memory.spawns[spawner.name].creepBodypartNumbers[currentBodytype];
    }



    console.log("We want " + toSpawnList[currentBodytype] + " of bodytype \'" + bodyPartsList[i] + "\', sans present screeps.");
  }
  // console.log("\'\'\'"+JSON.stringify(toSpawnList).replace(/,\"/g,",\"\n")+"\'\'\'");
  return toSpawnList;


},

/**
  * @param {int} error
  * @return {string}
  **/
resolveError(error)
{

}

}

module.exports = poobyputt;
