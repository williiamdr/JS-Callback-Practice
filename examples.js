const character = newImage('assets/green-character/static.gif')

if(direction === null){
    character.src = 'assets/green-character/static.gif'
}
if(direction === 'west'){
    character.src = 'assets/green-character/west.gif'
}
if(direction === 'north'){
    character.src = 'assets/green-character/north.gif'
}
if(direction === 'east'){
    character.src = 'assets/green-character/east.gif'
}
if(direction === 'south'){
    character.src = 'assets/green-character/south.gif'
}

move(character).withArrowKeys(100, 250)
