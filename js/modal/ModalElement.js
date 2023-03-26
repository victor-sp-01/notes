import CreateElement from "../helpers/CreateElement.js"
const ModalElement =( ...data )=>{

    const [ type = 'div', atributes = {}, html = '' ] = data 

    const root = document.getElementById( 'root' )
    const element = CreateElement( 'div', { class:'div__cI7bW scrollbarY' } )
    const bakcground = CreateElement( 'a', { class:'a__jo9mu1' } )
    const form = CreateElement( type, atributes, html )
    const hideElement = () => root.removeChild( element )

    element.append( 
        bakcground,
        form
    )

    root.append( element )
  
    bakcground.addEventListener( 'click', hideElement )
    return [ form, hideElement ]
    
}

export default ModalElement