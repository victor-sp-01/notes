import CreateElement from "../helpers/CreateElement.js"

const ModalApp =( title = '' )=>{
    //agregar titulo personalizado
    const container = CreateElement( 'div', { class : 'div__F0BGj' } )
    const header = CreateElement( 'header', { class:'header__xF47w' }, `
        <a href="#" class="a__w64L6" ><i class="fa-solid fa-arrow-left"></i></a>
        ${ title !== '' ? `<h3 class="h3__3EOaO" >${ title }</h3>` : '' }
    ` ) 
    const element = CreateElement( 'div', { class : 'div__1p9kk scrollbarY' } )

    document.getElementById( 'root' ).textContent = ''
    document.getElementById( 'root' ).append( container )
    container.append( header, element )

    return element
}

export default ModalApp