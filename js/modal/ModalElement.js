import CreateElements from "../lib/CreateElements.js"
const ModalElement =( data )=>{

    const root = document.getElementById( 'root' )

    const [ Container, Bakcground, Element ] = CreateElements([
        { div:{ attributes : { class:'div__cI7bW scrollbarY' } } },
        { a :{ attributes : { class:'a__jo9mu1' } } },
        data
    ])
    
    const hideElement = () => root.removeChild( Container )

    Container.append( 
        Bakcground,
        Element
    )

    root.append( Container )
    Bakcground.addEventListener( 'click', hideElement )

    return [ Element, hideElement ]
}

export default ModalElement
 