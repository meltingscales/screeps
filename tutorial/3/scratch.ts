Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Builder1',
    { memory: { role: 'builder' } } );


Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1',
    { memory: { role: 'harvester' } } );


Game.spawns['Spawn1'].spawnCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE],
    'HarvesterBig',
    { memory: { role: 'harvester' } } );