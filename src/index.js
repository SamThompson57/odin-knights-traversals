const { default: createBoard } = require("./createboard")

// Start by building a chess board
const content = document.getElementById('content')

content.appendChild(createBoard())