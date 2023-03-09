export const boardLetters = ['A','B','C','D','E','F','G','H']

function buildSquares(){
    let boardMap = []
    
    for(let y = 1; y < 9 ; y++){
        let line = []
        for(let x = 0; x < 8; x++){
            const square = boardLetters[x] + y
            line.push(square)
        }
        boardMap.push(line)
    }
    return boardMap
}

export const myMap = buildSquares()
