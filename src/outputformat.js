
export function formatOutput (moveArr){
    const output = document.createElement('div')
    
    const exampleDiv = document.createElement('div')
    
    let path = ''
    moveArr.forEach(element => {
        if(element !== moveArr[0]) {
            path += ` => ${element}`
        } else path += element
    });

    exampleDiv.textContent = path
    output.appendChild(exampleDiv)
    
    return output
}

export function explain(moveArr){
    const plural = moveArr.length > 2 ? 'moves' : 'move'
    return `The knight on ${moveArr[0]} will make it to ${moveArr[moveArr.length -1]} in ${moveArr.length-1} ${plural}`
}

export function dispMovement(moveArr){
    moveArr.forEach (element => {
        if (element !== moveArr[0]) {
            const moveSquare = document.createElement('img')
            document.getElementById(element).appendChild(moveSquare)
            moveSquare.src = '../img//circle.png'
        }
    })

    
}