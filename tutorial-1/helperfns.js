var constants = require('constants');

var poopybutt =
{

  runEvery(muhfunc, secs, verbose)
  {
    if(((Game.time ) % secs) == 0)
    {
      if(verbose != undefined){console.log("ran function \'" + arguments.callee.name + "()\' because " + Game.time + " % " + secs + " == 0");}
      muhfunc();
    }
    else
    {
      // console.log("didn't run function because " + Game.time + " % " + secs + " != 0");
    }
  },

  resetMemory(areyoureallyfuckingsureyoubigidiotdontcallmeifyourenotbro)
  {
    if(areyoureallyfuckingsureyoubigidiotdontcallmeifyourenotbro == "I'M REALLY FUCKING SURE")
    {
      console.log("I WARNED YOUUUUUUU\nResetting MEMORY, PREAPER TO DIE!!!!!11");
      Memory = {
        creeps: {},
        rooms:  {},
        spawns: {}
      };
    }
    else
    {
      console.log("Not resetting. If you are, call me with \"I'M REALLY FUCKING SURE\" as the only arg.");
    }
    return;
  },


  rand(min,max)
  {
    return ((Math.random() * (max - min)) + min);
  },

  randomItem(list)
  {
    randNum = this.rand(0,list.length-1);
    return list[Math.round(randNum)];
  },

  weightedChoose(list,weights)
  {//returns an item from a list based on given weights
    //["5","2","1a","1b"],[5,2,1,1]

    var listBig = [];

    for(i = 0; i < weights.length; i++)
    {
      for(j = 0; j < weights[i]; j++)
      {
        listBig.push(list[i]); //so fucking inefficient but I DONT CAAAAAARE
      }
    }

    return this.randomItem(listBig);
  },


  resolveError(error)
  {
    return constants.getErrorList(error);
  },



}

module.exports = poopybutt;
