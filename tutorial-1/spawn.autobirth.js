var helperfns = require('helperfns');

var refresh = 7;



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

  if(currPop > maxPop)
  {
    console.log(currPop + " > " + maxPop + ", so not spawning...");//we dont need to spawn
    return;
  }
  else
  {
    //now we need to determine what to spawn...


      console.log("\n\nMaintainPop");
      console.log("Was passed " + spawner + ", " + maxPop + ", " + ratiosList + ", " + JSON.stringify(bodypartsList) + ", " + nameTemplate);
      // console.log("spawner's spawned creeps = " + Memory.spawns[spawner.name].creeps.length );

      if(typeof(Memory.spawns[spawner.name]) == 'undefined')
      {
        Memory.spawns[spawner.name] = {}; //make memory.spawns list
        Memory.spawns[spawner.name].creeps = []; //make memory.spawns[spawnerName] list
        console.log("Memory.spawns." + spawner.name + "was undefined, so we made a new OBJECT.");
      }


      var currPop = Memory.spawns[spawner.name].creeps.length;

      var bodyTypesList = ratiosList; //a mathemagical combo of (ratios of bodytypes) and (max pop)

      for(i = 0; i < bodyTypesList.length; i++)
      {
        bodyTypesList[i] = Math.round(bodyTypesList[i] * maxPop);

        console.log("We want " + bodyTypesList[i] + " of bodytype \'" + bodypartsList[i] + "\', not factoring in preexisting workers");
      }

      


      console.log(bodyTypesList);














  }

  console.log("\n\n");

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
  maintainPopulation: function(spawner, maxPop, ratiosList, bodypartsList, nameTemplate)
  {
    helperfns.runEvery(function(){_maintainPopulation(spawner,maxPop,ratiosList,bodypartsList,nameTemplate)}, refresh); //ANON FUNC BRUH
  },



}

module.exports = poobyputt;
