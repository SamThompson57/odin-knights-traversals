import { pageState } from ".";


function selection (selection){
    console.log(selection)
    if (pageState === 'START'){
        startVal = selection
        //pageState = 'END'
        return
    }

}

export default selection