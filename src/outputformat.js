
export function formatOutput (moveArr){
    const output = document.createElement('div')
    output.setAttribute('id', 'output')

    const desc = document.createElement('div')
    desc.setAttribute('class', 'path')
    desc.textContent = 'An example of the knights path is:'
    output.appendChild(desc)
    const exampleDiv = document.createElement('div')
    exampleDiv.setAttribute('class', 'path')
    
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
    let i = 0
    moveArr.forEach (element => {
        if (element !== moveArr[0]) {
            const ringLabel = document.createElement('div')
            ringLabel.textContent = i
            ringLabel.setAttribute('class', 'ringlabel')
            document.getElementById(element).appendChild(ringLabel)
        }
        i++
    })
}