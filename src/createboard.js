import { boardLetters } from "./knightmoves";

function createBoard(){
    const board = document.createElement('div')
    board.setAttribute('class', 'board')

    for(let y = 8; y > 0 ; y--){
        for(let x = 0; x < 8; x++){
            const square = document.createElement('div');
            square.setAttribute('id', `${boardLetters[x] + y}`);
            if ((y+x)%2 == 1){
                square.setAttribute('class', 'dark')
            } else square.setAttribute('class', 'light') 
            board.appendChild(square)
        }
    }

    return board
}

export default createBoard