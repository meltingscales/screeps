const BuilderTemplate = [[WORK, CARRY, MOVE], 'Builder1',
{ memory: { role: 'builder' } }]

const HarvesterTemplate = [[WORK, CARRY, MOVE], 'Harvester1',
{ memory: { role: 'harvester' } }]

const HarvesterBigTemplate = [[WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], 'HarvesterBig',
{ memory: { role: 'harvester' } }]


var firstRoom = {

    run: function () {
        //spawn initial set of creeps, if this is our first room
        if (!Memory.bootstrap) {
            
            Memory.bootstrap = {}

            Memory.bootstrap.toSpawn = [
                BuilderTemplate,
                HarvesterTemplate,
                HarvesterBigTemplate
            ]

            Memory.bootstrap.spawned = []
        }

        //if we want to spawn creeps, then spawn them
        if (Memory.bootstrap.toSpawn) {

            let spawn = Game.spawns['Spawn1']
            //if we're not spawning currently,
            if (!spawn.spawning) {

                //spawn a creep
                creepTemplate = Memory.bootstrap.toSpawn.pop()

                spawn.spawnCreep(creepTemplate)

                Memory.bootstrap.spawned.push(creepTemplate)
            }
        }
    }
}

module.exports = firstRoom;