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

function knightMoves(start, end, movelist = [], queue = [start] ){
    // Take the start node and work out  all connected nodes
    console.log(`start: ${start}, end: ${end}`)
    if (start == end) {
        return movelist.push(end)
    }
    // add the child nodes to the queue
    movelist.push(start)
    queue.shift()
    return knightMoves(queue[0], end, movelist, queue)
    
}
export default knightMoves