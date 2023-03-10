import { selection } from ".";
import { boardLetters } from "./knightmoves";

function createBoard(){
    const board = document.createElement('div')
    board.setAttribute('class', 'board')
    board.setAttribute('id', 'board')

    for(let y = 8; y > 0 ; y--){
        const label = document.createElement('div')
        label.setAttribute('id', `row${y}`)
        label.setAttribute('class', 'row')
        label.textContent = `${y}`
        board.appendChild(label)
        for(let x = 0; x < 8; x++){
            const square = document.createElement('div');
            square.setAttribute('id', `${boardLetters[x] + y}`);
            if ((y+x)%2 == 1){
                square.setAttribute('class', 'dark')
            } else square.setAttribute('class', 'light') 
            board.appendChild(square)
            
            square.onclick = () => {
                selection(square.id)
            }
        }
    }
    let collumns = boardLetters
    collumns.unshift('')
    collumns.forEach(num => {
        const numLabel = document.createElement('div')
        numLabel.setAttribute('id', `col${num}`)
        numLabel.setAttribute('class', 'col')
        numLabel.textContent = num
        board.appendChild(numLabel)
    })
    collumns.shift()

    return board
}

export default createBoard