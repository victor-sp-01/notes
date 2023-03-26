import ListNotes from "../components/ListNotes.js"
import ViewNote from "../components/ViewNote.js"

const Notes =()=>{

    const type = 'note'
    const time = `t${ Date.now() }`

    document.getElementById( 'main' ).innerHTML = `
        <div class="div__vkNWh ${ time }" >
            <div class="div__OkY6P" >
                <span class="span__j6i6j" ></span>
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

    ListNotes( Data )  
}
export default Notes