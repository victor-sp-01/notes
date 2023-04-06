import { getLocalStorage } from "../api/apiLocalStorage.js"
import ListNotes from "../components/ListNotes.js"
import ViewNote from "../components/ViewNote.js"

const Notes =()=>{

    const classID = getLocalStorage( 'Time', Date.now() )

    document.getElementById( 'main' ).innerHTML = (`
        <div class="div__ZfjeC scrollbarY" >
            <div class="div__vkNWh div-${ classID }" ></div>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    `) 
       
    document.querySelector( '.div__vkNWh' ).addEventListener( 'click', ( { target } )=>{
        if( target.classList.contains( '9md2DJaufRwfRugcCk47U9ssi' ) )
            ViewNote( { type : 'note', id : target.id } ) 
    } )

    ListNotes()
}
export default Notes



/*
    const type = 'note'
    const time = `t${ Date.now() }`

    document.getElementById( 'main' ).innerHTML = `
        <div class="div__rfyDj">
            <div class="div__vkNWh ${ time }" >
                <div class="div__OkY6P" >
                    <span class="span__j6i6j" ></span>
                </div>
            </div>
        </div>
        
        <a href="#list/add/${ Date.now() }" class="button__wDuge" ><i class="fa-solid fa-plus"></i></a>
    `

    const Data = {
        lstElement : document.querySelector( `.div__vkNWh.${ time }` ),
        type    : type 
    }
    
    document.querySelector( '.div__vkNWh' ).addEventListener( 'click', ( { target } )=>{
        if( target.classList.contains( '9md2DJaufRwfRugcCk47U9ssi' ) ){ 

            const data = { ...Data, id : target.id } 
            ViewNote( data )
            
        }
    } )

    ListNotes( Data )*/