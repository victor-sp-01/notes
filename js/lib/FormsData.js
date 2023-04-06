const FormsData =( datas = {} )=>{
    const Element = document.createElement( 'form' )

    for ( const data in datas ){
        const textarea = document.createElement( 'textarea' )
        textarea.setAttribute( 'name', data )
        textarea.innerHTML = `${ datas[ data ] }`.trim()
        Element.append( textarea )
    }
         
    return Element
}

export default FormsData