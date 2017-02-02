//Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Harvester1' );

// var _ = require('coolmodule');
var _ = require('helperfns');
var roleHarvester = require('role.harvester');

var closeEnergy = "CLOSE_ENERGY";

// console.log(_.testin); //to test if my import works

module.exports.loop = function()
{

    var creep = Game.creeps['Harvester1'];

    roleHarvester.run(creep);
};
