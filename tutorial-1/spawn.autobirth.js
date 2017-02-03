var _ = require('helperfns');

var refresh = 3;



/**
  * @param {StructureSpawn} spawner
  * @param {list_maybe} maxPop
  * @param {gist_maybe} ratiosList
  * @param {fist_maybe} bodypartsList
  * @param {string} nameTemplate
  *
  **/
function _maintainPopulation(spawner, maxPop, ratiosList, bodypartsList, nameTemplate)
{
  console.log("MaintainPop");
  console.log("Was passed " + spawner + ", " + maxPop + ", " + ratiosList + ", " + bodypartsList + ", " + nameTemplate);
  // console.log("spawner's spawned creeps = " + Memory.spawns[spawner.name].creeps.length );

  var currPop = Memory.spawns[spawner.name].creeps.length;
  var bodyTypesList; //a mathemagical combo of (ratios of bodytypes) and (max pop)

  //we have [
  //         [WORK,CARRY,MOVE],
  //         [CARRY,CARRY,MOVE],
  //         [WORK,WORK,MOVE]
  //        ]
  //
  //  and have [0.6, 0.1, 0.3]
  //
  //  AND have 10.
  //
  //  how do we construct a proportional list of WHOLE numbers?
  //
  //  We can try multiplying it directly. That gets us:
  //  [6, 1, 3], which is valid. Does it work for uglier requests?
  //
  //  we want 11.
  //
  //  [6.6, 1.1, 3.3] is invalid...but, I see a pattern here... we round them.
  //  [7,   1,   3]
  //
  //
  // one last case. equal numbers, which gets priority?
  //
  //
  // [0, 0.5, 0.5] with an 11.
  //
  // [0, 5.5, 5.5]
  // [0, 6,   6]  this is bad. we've got one too many. we'll deal with this later.
  //

  if(currPop > maxPop)
  {
    console.log(currPop + " > " + maxPop + ", so not spawning...");//we dont need to spawn
  }





  else
  {
    //now we need to determine what to spawn...

    //loop through all screeps tied to this spawn, subtracting the "existing bodies" from our bodyTypesList
      //
      //
    //
  }


}

//muh export
var poobyputt =
{

/**
  * @param {Game.spawns} spawner
  * @param {list_maybe} maxPop
  * @param {gist_maybe} ratiosList
  * @param {fist_maybe} bodypartsList
  * @param {string} nameTemplate
  *
  **/
  maintainPopulation: function(spawner, maxPop, ratiosList, bodypartsList, nameTemplate)
  {
    _.runEvery(function(){_maintainPopulation(spawner,maxPop,ratiosList,bodypartsList,nameTemplate)}, refresh); //ANON FUNC BRUH
  },



}

module.exports = poobyputt;
