import CreateElement from "./CreateElement.js"

const FormsData =( datas = {} )=>{
    const Element = document.createElement( 'form' )

    for ( const data in datas )
        Element.append(CreateElement({ textarea : { attributes : { name:data }, contents : { textContent : `${ datas[ data ] }`.trim() }}}))
         
    return Element

}

export default FormsData