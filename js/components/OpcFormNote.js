import { ModalOption } from "../modal/Modals.js"
import setDataNote from "../data/setDataNote.js"
import FormNote from "./FormNote.js"

const OpcFormNote =( type = false, data = false )=>{
    const [ Element, hideElement ] = ModalOption(`
        ${ type === 'edit' ? `
            <button type="button" class="button__m0nNx after YP51L9yLdSVoaHf" data-action="trash" >
                <i class="fa-solid fa-trash-can-arrow-up"></i>
                <span>trash</span>
            </button>
            <button type="button" class="button__m0nNx after YP51L9yLdSVoaHf" data-action="share" >
                <i class="fa-solid fa-link"></i>
                <span>share</span> 
            </button> 
        ` 
        : type === 'share' ? `
            <button type="button" class="button__m0nNx after YP51L9yLdSVoaHf" data-action="deleteShare" >
                <i class="fa-solid fa-link-slash"></i>
                <span>share</span> 
            </button>
        ` 
        : type === 'trash' ? `
            <button type="button" class="button__m0nNx after YP51L9yLdSVoaHf" data-action="recover" >
                <i class="fa-solid fa-repeat"></i>
                <span>restaurar</span> 
            </button>
            <button type="button" class="button__m0nNx after YP51L9yLdSVoaHf" data-action="delete" >
                <i class="fa-solid fa-trash"></i>
                <span>delete</span> 
            </button>
        ` 
        : '' }     
    `)

    Element.addEventListener( 'click', ({ target })=>{
        if( target.classList.contains('YP51L9yLdSVoaHf') ){
            setDataNote( target.dataset.action, data )
            .then( () => { 
                hideElement()

            if( [ 'trash', 'recover', 'deleteShare', 'delete' ].includes( target.dataset.action ) )
                FormNote()
            })
        }
    })

    Element.addEventListener( 'submit', e => e.preventDefault() )

}

export default OpcFormNote