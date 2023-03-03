function createBoard(){
    const board = document.createElement('div')
    board.setAttribute('class', 'board')

    for(let y = 8; y > 0 ; y--){
        for(let x = 1; x < 9; x++){
            const square = document.createElement('div');
            square.setAttribute('id', `square${x}${y}`);
            if ((y+x)%2 == 1){
                square.setAttribute('class', 'light')
            } else square.setAttribute('class', 'dark') 
            board.appendChild(square)
        }
    }

    return board
}

export default createBoard