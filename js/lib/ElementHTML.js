const ElementHTML =( data )=>{
    const { element = false, html = '' } = data

    const Element = document.querySelector( element )
    if( Element )
        Element.innerHTML = ( html )

}

export default ElementHTML
 