const BuilderTemplate = [[WORK, CARRY, MOVE], 'Builder1',
{ memory: { role: 'builder' } }]

const HarvesterTemplate = [[WORK, CARRY, MOVE], 'Harvester1',
{ memory: { role: 'harvester' } }]

const HarvesterBigTemplate = [[WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], 'HarvesterBig',
{ memory: { role: 'harvester' } }]


var firstRoom = {

    run: function () {

        // delete Memory.bootstrap

        //spawn initial set of creeps, if this is our first room
        if (!Memory.bootstrap) {
            
            Memory.bootstrap = {
                toSpawn: [
                    BuilderTemplate,
                    HarvesterTemplate,
                    HarvesterBigTemplate
                ],
                spawned: []
            }


        }

        //if we want to spawn creeps, then spawn them
        if (Memory.bootstrap.toSpawn.length > 0) {

            let spawn = Game.spawns['Spawn1']
            //if we're not spawning currently,
            if (!spawn.spawning) {

                //spawn a creep
                creepTemplate = Memory.bootstrap.toSpawn.pop()

                console.log("Spawning this creep: ")
                console.log(creepTemplate)

                spawn.spawnCreep(...creepTemplate)

                Memory.bootstrap.spawned.push(creepTemplate)
            } else {
                console.log("Not spawning creep due to waiting on spawn cooldown")
            }
        }
    }
}

module.exports = firstRoom;