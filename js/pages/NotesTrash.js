import { getLocalStorage } from "../api/apiLocalStorage.js"

import { ModalApp } from "../modal/Modals.js"
import ListNotes from "../components/ListNotes.js"

import ViewNote from "../components/ViewNote.js"

const NotesTrash =()=>{ 
    
    const Element = ModalApp()
    const classID = getLocalStorage( 'Time', Date.now() )

    Element.innerHTML = (`
        <div class="div__ZfjeC scrollbarY" >
            <div class="div__vkNWh div-${ classID }" ></div>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    `) 
       
    ListNotes()

    document.querySelector( '.div__vkNWh' ).addEventListener( 'click', ( { target } )=>{
        if( target.classList.contains( '9md2DJaufRwfRugcCk47U9ssi' ) )
            ViewNote( { type : 'trash', id : target.id } )
    })
    
}
export default NotesTrash


/*
    const type = 'trash'
    const time = `t${ Date.now() }`
    const element = ModalApp( type )
    element.innerHTML = `
        <div class="div__rfyDj">
            <div class="div__vkNWh ${ time }" >
                <div class="div__OkY6P" >
                    <span class="span__j6i6j" ></span>
                </div>
            </div>
        </div>
    `

    const Data = {
        lstElement : element.querySelector( `.div__vkNWh.${ time }` ),
        type    : type
    }
    
    element.querySelector( '.div__vkNWh' ).addEventListener( 'click', ( { target } )=>{
        if( target.classList.contains( '9md2DJaufRwfRugcCk47U9ssi' ) ){ 
            
            const data = { ...Data, id : target.id } 
            ViewNote( data )
            
        }
    } )

    ListNotes( Data ) */