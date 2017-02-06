var helperfns = require('helperfns');

var refresh = 7;

var DEFAULT_MAX_POP = 10;
var DEFAULT_RATIOS_LIST = [0.6,0.3,0.1];
var DEFAULT_BODYTYPES_LIST =[[WORK,CARRY,MOVE],[CARRY,CARRY,MOVE],[WORK,WORK,MOVE]];


function _spawnerManagePopulation(spawner)
{ //use k-v pair of JSON.str(bodytype):howmanytospawn loaded into memory combined with
  //keeping track of when I spawn something to actually DO the friggin spawning...

    if(Memory.spawns[spawner.name].toSpawnList == undefined)
    {
      console.log("spawner " + spawner + " does NOT have a to-spawn list. REBUILDING with default values.");
      Memory.spawns[spawner.name].toSpawnList = _rebuildToSpawnList(spawner,DEFAULT_MAX_POP,DEFAULT_RATIOS_LIST,DEFAULT_BODYTYPES_LIST);
    }
    else
    {
      console.log("spawner " + spawner + " DOES HAVE a to-spawn list. insert actual code here...");

      


    }

}


function _processToSpawnList(spawner, toSpawnList)
{//processes a key-value pair of JSON.str(bodytype):howmanytospawn
  if(Memory.spawns[spawner].toSpawnList == undefined)
  {
    Memory.spawns[spawner].toSpawnList = toSpawnList; //just in case
  }


}


function _rebuildToSpawnList(spawner, maxPop, ratiosList, bodyPartsList)
{ //returns an object that tells you what bodytypes you need to spawn

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


}

/**
  * @param {StructureSpawn} spawner
  * @param {string[]} creepNames
  **/
function _rebuildCreepBodypartNumbers(spawner, creepNames) //returns a list of bodytypes from a spawner and list of creepnames.
{
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
}



/**
  * @param {StructureSpawn} spawner
  * @param {integer} maxPop
  * @param {integer[]} ratiosList
  * @param {integer[]} bodypartsList
  * @param {string[]} nameTemplate
  *
  **/
function _maintainPopulation(spawner, maxPop, ratiosList, bodypartsList, nameTemplate)
{

}

//muh export
var poobyputt =
{

/**
  * @param {StructureSpawn} spawner
  * @param {integer} maxPop
  * @param {integer[]} ratiosList
  * @param {integer[]} bodypartsList
  * @param {string[]} nameTemplate
  *
  **/
  maintainPopulation: function(spawner, maxPop, ratiosList, bodyPartsList, nameTemplate)
  {
    return _maintainPopulation(spawner,maxPop,ratiosList,bodyPartsList,nameTemplate);
  },

  rebuildCreepBodypartNumbers: function(spawner, creepNames)
  {
    return _rebuildCreepBodypartNumbers(spawner,creepNames);
  },

  rebuildToSpawnList: function(spawner, maxPop, ratiosList, bodyPartsList)
  {
    return _rebuildToSpawnList(spawner, maxPop, ratiosList, bodyPartsList);
  },

  spawnerManagePopulation: function(spawner)
  {
    return _spawnerManagePopulation(spawner);
  },


}

module.exports = poobyputt;
