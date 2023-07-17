Game.spawns['Spawn1'].room.controller.activateSafeMode();

Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );

for (var id in Game.structures) {
    let structure = Game.structures[id]
    console.log(structure);


    if(structure.structureType === "tower") {
        console.log("found a tower")
    }
}