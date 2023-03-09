import { myMap } from "./knightmoves"
import move from "./move"

class Graph {
    constructor(vertices){
        this.vertices = vertices
        this.Adjlist = new Map()
    }

    addvertex(v){
        this.Adjlist.set(v,[])
    }
    
    addEdge(v, w){
        this.Adjlist.get(v).push(w)
    }

    printGraph(){
        console.log('Printing Graph')
        console.log(this.Adjlist)
        
    }

    allnodes(start, end, queue = [start], movelist = []){
        // Take the start node and work out  all connected nodes
        if (start == end) {
            movelist.push(end)
            return movelist
        }
        const childnodes = this.Adjlist.get(start)
        movelist.push(start)

        childnodes.forEach(child => {
            if (!movelist.includes(child)&&!queue.includes(child)) queue.push(child)
        })
        queue.shift()
        return this.allnodes(queue[0], end, queue, movelist)
        
    }

    knightMoves(start, end){
        let nodeArray = this.allnodes(start, end)
        nodeArray.reverse()
        for (let i = 0; i < nodeArray.length-2; i++){
            const adjNodes = this.Adjlist.get(nodeArray[i])
            if (!adjNodes.includes(nodeArray[i+1])){
                nodeArray.splice(i+1, 1)
                i--
            }
        }

        return nodeArray.reverse()
    }
}

let board = new Graph(64)

const squares = myMap

squares.forEach(element => {
   element.forEach(space => {
    board.addvertex(space)
    
   }) 
});

squares.forEach(element => {
    element.forEach(space => {
     const edgeArr = move(squares.indexOf(element), element.indexOf(space), squares)
     edgeArr.forEach(edge => {
        board.addEdge(space, edge)
     })
    }) 
 });



export default board