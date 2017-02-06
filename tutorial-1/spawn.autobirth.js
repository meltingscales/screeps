var helperfns = require('helperfns');
var datahandler = require('datahandler');

var refresh = 7;
var refreshLong = 500;
var refreshStale = 4567;

var DEFAULT_MAX_POP = 10;
var DEFAULT_RATIOS_LIST = [0.6,0.3,0.1];
var DEFAULT_BODYTYPES_LIST = [[WORK,CARRY,MOVE],[CARRY,CARRY,MOVE],[WORK,WORK,MOVE]];

var poobyputt =
{

/**
  * @param {StructureSpawn} spawner
  * @param {string} nameTemplate
  **/

spawnerManagePopulation(spawner, nameTemplate)
{ //use k-v pair of JSON.str(bodytype):howmanytospawn loaded into memory combined with
  //keeping track of when I spawn something to actually DO the friggin spawning...

  var nameTemplate2 = (nameTemplate + spawner.memory.creeps.length); //"s1Creep_" + x

  if(spawner.memory.spawnOptions == undefined)
  {
    spawner.memory.spawnOptions = {};
    spawner.memory.spawnOptions["MAX_POP"] = DEFAULT_MAX_POP;
    spawner.memory.spawnOptions["RATIOS_LIST"] = DEFAULT_RATIOS_LIST;
    spawner.memory.spawnOptions["BODYTYPES_LIST"] = DEFAULT_BODYTYPES_LIST;
    spawner.memory["spawnOptions.freshness"] = Game.time;
  }

  if(Memory.spawns[spawner.name].toSpawnList == undefined)
  {
    console.log("spawner " + spawner + " does NOT have a to-spawn list. REBUILDING with default values.");
    spawner.memory.toSpawnList = datahandler.rebuildToSpawnList(
      spawner,
      spawner.memory.spawnOptions["MAX_POP"],
      spawner.memory.spawnOptions["RATIOS_LIST"],
      spawner.memory.spawnOptions["BODYTYPES_LIST"]);
      spawner.memory["toSpawnList.freshness"] = Game.time;
  }

  console.log("spawner " + spawner + " DOES HAVE a to-spawn list. insert actual code here...");

  if((Game.time % refreshLong) == 0)
  {//periodic check of freshness
    console.log("periodic " + refreshLong + "-tick check of freshness...");

    if((Game.time - spawner.memory["toSpawnList.freshness"]) > refreshStale)
    {
      console.log("Refreshing toSpawnList");
      spawner.memory.toSpawnList = datahandler.rebuildToSpawnList(spawner);
      spawner.memory["toSpawnList.freshness"] = Game.time;
    }

    if((Game.time - spawner.memory["creepBodypartNumbers.freshness"]) > refreshStale)
    {
      console.log("Refreshing creepBodypartNumbers");
      spawner.memory.creepBodypartNumbers = datahandler.rebuildCreepBodypartNumbers(spawner);
      spawner.memory["creepBodypartNumbers.freshness"] = Game.time;
    }

    if((Game.time - spawner.memory["toSpawnNow.freshness"]) > refreshStale)
    {
      console.log("Refreshing toSpawnNow");
      spawner.memory.toSpawnNow.body = datahandler.processToSpawnList(spawner);
      spawner.memory.toSpawnNow.name = nameTemplate2;
      spawner.memory["toSpawnNow.freshness"] = Game.time;
    }
  }//end of periodic check

  if(spawner.memory.toSpawnNow.body == undefined)
  { //TODO delete this TODO
    console.log("Refeshing toSpawnNow...")
    spawner.memory.toSpawnNow.body = datahandler.processToSpawnList(spawner);
    spawner.memory.toSpawnNow.name = nameTemplate2;



    console.log("Attempting to create creep with body \'" + JSON.stringify(spawner.memory.toSpawnNow.body) + '\' and name '+nameTemplate2);
    if(spawner.canCreateCreep(spawner.memory.toSpawnNow.body,nameTemplate2) == OK)
    {
      console.log("Birthing creep \'" + nameTemplate2 + "\', bodytype \'" + JSON.stringify(spawner.memory.toSpawnNow.body) + "\'");

      spawner.createCreep(spawner.memory.toSpawnNow.body,nameTemplate2); //actually make creep

      spawner.memory.creeps.push(nameTemplate2); //record name
      memory.creeps[nameTemplate].body = spawner.memory.toSpawnNow.body; //record body in creep memory


      spawner.memory.toSpawnList[JSON.stringify(spawner.memory.toSpawnNow.body)] += -1; //need 1 less of bod X
      spawner.memory.creepBodypartNumbers[JSON.stringify(spawner.memory.toSpawnNow.body)]+= 1; //have 1 more of bod X

      //update spawner.memory.toSpawnNow with next creep to spawn
    }
    else
    {
      console.log("Not birthing creep because " + helperfns.resolveError(spawner.canCreateCreep(spawner.memory.toSpawnNow.body,nameTemplate2)))
    }

  }

},


/**
  * @param {StructureSpawn} spawner
  * @param {integer} maxPop
  * @param {integer[]} ratiosList
  * @param {integer[]} bodypartsList
  * @param {string[]} nameTemplate
  *
  **/
maintainPopulation(spawner, maxPop, ratiosList, bodypartsList, nameTemplate)
{

}

}

module.exports = poobyputt;
