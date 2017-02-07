var roleHarvester = require("role.harvester");
var roleBuilder = require("role.builder");

var exportsMan =
{

  /**
    * @param {Creep} creep
    * @param {string} role
    **/
  run(creep,role)
  {
    if(role == undefined){var role = creep.memory.role;}
    
    
    switch (role)
    {
      case "HARVESTER":
        roleHarvester.run(creep);
        break;
      
      case "BUILDER":
        roleBuilder.run(creep);
        break;
        
      default:
        console.log(creep.name + " with job "+ creep.memory.role +" don't know what to do!!! AAAAA");
        
    }
  }
}

module.exports = exportsMan;
