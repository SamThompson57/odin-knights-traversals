import { dispMovement, explain, formatOutput } from "./outputformat"

const { default: createBoard } = require("./createboard")
const { default: board } = require("./graph")

// Const to append to main Div of the HTML file
const content = document.getElementById('content')

// Title of the page
const title = document.createElement('div')
title.setAttribute('class', 'title')
title.textContent = "Knights Traversals"
content.appendChild(title)

// Instructions for setting up the function
export const instructions = document.createElement('div')
instructions.setAttribute('class', 'instructions')
instructions.textContent = "Select START location on the board"
content.appendChild(instructions)


content.appendChild(createBoard())

const controls = document.createElement('div')
controls.setAttribute('class', 'controls')
content.appendChild(controls)

let startVal = ''
let endVal = ''

const start = document.createElement('div')
start.textContent = `Start: ${startVal}`
controls.appendChild(start)

const end = document.createElement('div')
end.textContent = `End: ${endVal}`
controls.appendChild(end)

const output = document.createElement('div')
content.appendChild(output)


let pageState = 'START'

const resetDiv = document.createElement('div')
const reset = document.createElement('button')
reset.textContent = 'RESET'

resetDiv.setAttribute('class','controls')
resetDiv.appendChild(reset)
content.appendChild(resetDiv)


export function selection(select){
    console.log(select)
    if (pageState === 'START'){
        console.log('Start Selected')
        start.textContent = `Start: ${select}`
        startVal = select
        const startSquare = document.createElement('img')
        document.getElementById(select).appendChild(startSquare)
        startSquare.src = '../img//knight.png'
        instructions.textContent = "Select END location on the board"
        pageState = 'END'
        return 
    }
    if (pageState === 'END' && select !== startVal){
        console.log('End Selected')
        end.textContent = `End: ${select}`
        endVal = select
        let endSquare = document.getElementById(endVal)
        endSquare.setAttribute('class', 'red')
        pageState = 'SET'
        const ansArr = board.knightMoves(startVal,endVal)
        content.appendChild(formatOutput(ansArr))
        dispMovement(ansArr)
        instructions.textContent = explain(ansArr)
        return 
    }
}


/* 
FEATURES TO IMPLEMENT


Arrows to show route

Random Routes
*/