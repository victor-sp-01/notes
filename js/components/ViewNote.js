import Element from "../lib/Element.js"

import getDataNote from "../data/getDataNote.js"
import setDataNote from "../data/setDataNote.js"
import ListNotes from "./ListNotes.js"

import { ModalElement } from "../modal/Modals.js"
import { CreateHTML } from "../lib/Elements.js"

import ChangeInputValue from "../helpers/ChangeInputValue.js"

const ViewNote = async ( datas )=>{

    const { type = 'note', id = {} } = datas 
    const [ data = {} ] = await getDataNote( type, id )  
    const [ modalElement, hideModalElement ] = ModalElement()  

    const $Element = new Element({
        form : { attributes : { class : 'form__ZRaaY' }, contents : {
            innerHTML : CreateHTML({
                elements : {
                    '.title__7aXu5' : { textContent : data.title || '' },
                    '.textarea__IiD1q.scrollbarY' : { textContent : data.details || '' }
                },
                html : (`
                    <div class="div__nBqSy" >
                        <div class="div__SSgg4" >
                            <h3 class="title__7aXu5" ></h3>
                        </div>
                        <textarea class="textarea__IiD1q scrollbarY" spellcheck="false" readonly ></textarea>
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
                                
                                <a  href="#list/${ type === 'note' ? 'edit' : type }/${ data.id  }" class="a__eusv9" >
                                    ${ type === 'note' || type === 'offline' ? `<i class="fa-solid fa-pen"></i>` : `<i class="fa-solid fa-arrow-right"></i>` }
                                </a>
                        </div>
                    </div>
                `)
            })
        }}
    }) 
    
    $Element.create()
    $Element.append({ element : modalElement })
    ChangeInputValue( $Element.element, data )

    $Element.element.addEventListener( 'click', ( { target } ) =>{
 
        if( target.classList.contains( 'ZSxVYBbeDzp374Yg48CA' ) ){
            setDataNote( target.dataset.action, data )
            .then( resp => resp && ( hideModalElement(), ListNotes() ) )
        }
        
    } )

    $Element.element.addEventListener( 'submit', e => e.preventDefault() )  

}
export default ViewNote


/*
import ListNotes from "./ListNotes.js"

import getDataNote from "../data/getDataNote.js"
import setDataNote from "../data/setDataNote.js"

import CreateElementHTML from "../lib/CreateElementHTML.js"
import ModalElement from "../modal/ModalElement.js" 

    const { type = 'note', id = {} } = datas 
    const [ data = {} ] = await getDataNote( type, id )  
    const [ Element, hideElement ] = ModalElement({
        form : { attributes : { class : 'form__ZRaaY' }, contents : {
            innerHTML : CreateElementHTML({
                elements : {
                    '.title__7aXu5' : { textContent : data.title || '' },
                    '.textarea__IiD1q.scrollbarY' : { textContent : data.details || '' }
                },
                html : (`
                    <div class="div__nBqSy" >
                        <div class="div__SSgg4" >
                            <h3 class="title__7aXu5" ></h3>
                        </div>
                        <textarea class="textarea__IiD1q scrollbarY" spellcheck="false" readonly ></textarea>
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
                                
                                <a  href="#list/${ type === 'note' ? 'edit' : type }/${ data.id  }" class="a__eusv9" >
                                    ${ type === 'note' || type === 'offline' ? `<i class="fa-solid fa-pen"></i>` : `<i class="fa-solid fa-arrow-right"></i>` }
                                </a>
                        </div>
                    </div>
                `)
            })
        }}
    })

    Element.addEventListener( 'click', ( { target } ) =>{
        
        if( target.classList.contains( 'ZSxVYBbeDzp374Yg48CA' ) ){
            setDataNote( target.dataset.action, data )
            .then( resp => resp && ( hideElement(), ListNotes() ) )
        }
        
    } )

    Element.addEventListener( 'submit', e => e.preventDefault() )*/