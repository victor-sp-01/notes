import CreateElements from "../lib/CreateElements.js"

const ModalApp =( title = '' )=>{

    const [ Container, Header, Element ] = CreateElements([
        { div: { attributes:{ class:'div__F0BGj' } } },
        { header: { attributes:{ class:'header__xF47w' }, contents:{
            innerHTML : `
                <a href="#" class="a__ChSBE" ><i class="fa-solid fa-arrow-left"></i></a>
                ${ title !== '' ? `<h3 class="h3__3EOaO" >${ title }</h3>` : '' }
            `
        }}},
        { div:{ attributes:{ class : 'div__1p9kk scrollbarY' }}}
    ])

    document.getElementById( 'root' ).textContent = ''
    document.getElementById( 'root' ).append( Container )
    Container.append( Header, Element ) 

    return Element 
}

export default ModalApp

 