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