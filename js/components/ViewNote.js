import ListNotes from "./ListNotes.js"

import getDataNote from "../data/getDataNote.js"
import setDataNote from "../data/setDataNote.js"

import ModalElement from "../modal/ModalElement.js"

const ViewNote = async ( datas )=>{

    const { type = 'note', id = {} } = datas 
    const [ data = {} ] = await getDataNote( type, id )

    const [ element, hideElement ] = ModalElement( 
        'form', { class : 'form__ZRaaY' },`
            <div class="div__nBqSy" >
                <div class="div__SSgg4" >
                    <h3 class="title__7aXu5" >${ data.title || '' }</h3>
                </div>
                <textarea class="textarea__IiD1q scrollbarY" spellcheck="false" readonly >${ data.details || '' }</textarea>
                <div class="div__YMHc1" >
 
                        ${ type === 'note' ? `
                            <button type="button" class="button__wEeFj after ZSxVYBbeDzp374Yg48CA" data-action="share" ><i class="fa-solid fa-link"></i></button>
                            <button type="button" class="button__wEeFj after ZSxVYBbeDzp374Yg48CA" data-action="trash" ><i class="fa-solid fa-trash-can-arrow-up"></i></button>
                        ` 
                        : type === 'offline' ? `
                            <button type="button" class="button__wEeFj after ZSxVYBbeDzp374Yg48CA" data-action="deleteOff" ><i class="fa-solid fa-trash"></i></button>
                            <button type="button" class="button__wEeFj after ZSxVYBbeDzp374Yg48CA" data-action="add" ><i class="fa-solid fa-cloud-arrow-up"></i></button>
                        `
                        : type === 'share' ? `
                            <button type="button" class="button__wEeFj after ZSxVYBbeDzp374Yg48CA" data-action="deleteShare" ><i class="fa-solid fa-link-slash"></i></button> 
                        `
                        : type === 'trash' ? `
                            <button type="button" class="button__wEeFj after ZSxVYBbeDzp374Yg48CA" data-action="delete" ><i class="fa-solid fa-trash"></i></button>
                            <button type="button" class="button__wEeFj after ZSxVYBbeDzp374Yg48CA" data-action="recover" ><i class="fa-solid fa-rotate-right"></i></button>
                        `
                        : ''
                        } 
                        
                        <a  href="#list/${ type === 'note' ? 'edit' : type }/${ data.id  }" class="a__eusv9" ><i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        `
    )

    element.addEventListener( 'click', ( { target } ) =>{
        
        if( target.classList.contains( 'ZSxVYBbeDzp374Yg48CA' ) ){
            setDataNote( target.dataset.action, data )
            .then( resp => resp && ( hideElement(), ListNotes( datas ) ) )
        }
        
    } )

    element.addEventListener( 'submit', e => e.preventDefault() )
}
export default ViewNote
 