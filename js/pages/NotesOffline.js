import { getLocalStorage } from "../api/apiLocalStorage.js"
import ListNotes from "../components/ListNotes.js"
import ViewNote from "../components/ViewNote.js"


const NotesOffline =()=>{

    const classID = getLocalStorage( 'Time', Date.now() )

    document.getElementById( 'main' ).innerHTML = (`
        <div class="div__ZfjeC scrollbarY" >
            <div class="div__vkNWh div-${ classID }" ></div>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    `) 
       
    document.querySelector( '.div__vkNWh' ).addEventListener( 'click', ( { target } )=>{
        if( target.classList.contains( '9md2DJaufRwfRugcCk47U9ssi' ) ) 
            ViewNote( { type : 'offline', id : target.id } )
    }) 

    ListNotes()
    
}
export default NotesOffline
 