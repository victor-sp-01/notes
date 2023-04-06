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
       
    document.querySelector( '.div__vkNWh' ).addEventListener( 'click', ( { target } )=>{
        if( target.classList.contains( '9md2DJaufRwfRugcCk47U9ssi' ) )
            ViewNote( { type : 'trash', id : target.id } )
    })

    ListNotes()
}
export default NotesTrash