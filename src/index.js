const { default: createBoard } = require("./createboard")
const { default: board } = require("./graph")
const { testSquare, default: knightMoves, bMap, myMap } = require("./knightmoves")

// Start by building a chess board
const content = document.getElementById('content')

content.appendChild(createBoard())

console.log('hello')

console.log(myMap)

board.printGraph()

console.log(board.Adjlist.get('F3'))

// board.printGraph()

//console.log(knightMoves([0,0],[1,2]))

//console.log(knightMoves([1,1],[3,3]))
//console.log(knightMoves([3,3],[0,0]))