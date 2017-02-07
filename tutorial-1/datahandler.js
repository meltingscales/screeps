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
  * @param {string[]} creepNames
  **/
rebuildBodytypes(creepNames) //returns a list of bodytypes from a list of creepnames.
{
  console.log("rebuilding bodytypes with list... " + JSON.stringify(creepNames));
  
  var ret = {};
  
  for(i = 0; i < creepNames.length-1; i++)
  {
    var currName = JSON.stringify(Memory.creep[creepNames[i]].sort());
    
    if(ret[currName] == undefined)
    {
      ret[currName] = 0;
    }
    
    ret[currName] += 1;
  }
  
  return ret;

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
