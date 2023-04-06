import Element from "../lib/Element.js" 
import Routes from "../routes/Routes.js"

const Main =()=>{

    const $Element = new Element({ main: { attributes : { class:'main', id:'main' }}})

    $Element.create()
    $Element.append( { classID : '#root' } ) 

    Routes()
}

export default Main