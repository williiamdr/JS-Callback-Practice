function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom){
        let direction = null;
        let x = left;
        let y = bottom;
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
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
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }
    

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}



