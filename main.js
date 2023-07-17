var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleTower = require('role.tower');
var firstRoom = require('firstRoom')


module.exports.loop = function () {

	//initialize if we're in a first room
	firstRoom.run();

	//clear old creep memory
	for (var name in Memory.creeps) {
		if (!Game.creeps[name]) {
			delete Memory.creeps[name];
			console.log('Clearing non-existing creep memory:', name);
		}
	}

	//make sure towers fire and repair
	for (var id in Game.structures) {
		let structure = Game.structures[id]
		if (structure.structureType === "tower") {
			roleTower.run(structure)
		}
	}

	//run creep roles
	for (var name in Game.creeps) {
		var creep = Game.creeps[name];
		if (creep.memory.role == 'harvester') {
			roleHarvester.run(creep);
		}
		if (creep.memory.role == 'upgrader') {
			roleUpgrader.run(creep);
		}
		if (creep.memory.role == 'builder') {
			roleBuilder.run(creep);
		}
	}
}