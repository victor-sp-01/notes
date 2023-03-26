import ModalApp from "../modal/ModalApp.js"
import ListNotes from "../components/ListNotes.js"

import ViewNote from "../components/ViewNote.js"

const NotesTrash =()=>{ 

    const type = 'trash'
    const time = `t${ Date.now() }`
    const element = ModalApp( type )
    element.innerHTML = `
        <div class="div__vkNWh ${ time }" >
            <div class="div__OkY6P" >
                <span class="span__j6i6j" ></span>
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

    ListNotes( Data ) 
    
}
export default NotesTrash