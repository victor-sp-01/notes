import getDataNote from "../data/getDataNote.js"
import setDataNote from "../data/setDataNote.js"

import srcApi from "../helpers/srcApi.js"
import { Params } from "../helpers/Params.js"
import { setData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

import CreateElement from "../helpers/CreateElement.js"
import ChangeInputValue from "../helpers/ChangeInputValue.js"

const FormNote = async( type )=>{

    const id = Params(2)

    const Data = {
        element : '',
        data    : {
            id      : id,
            title  : '',
            details : '',
            dateLocal : Date.now()
        } 
    }

    const lstNotes = JSON.parse( localStorage.getItem( 'lstNotes' ) ) 
    const lstNotesOffline = lstNotes.offline.filter( data => data.id !== id ) 

    const btnBack = type === 'edit' || type === 'add' ? '#' : `#list/${ type }`
    const btnSubmit = type === 'add' || type === 'edit' || type === 'offline'

    document.getElementById( 'root' ).append( 
        Data.element = CreateElement( 'form', { class : 'form__zWDsn', autocomplete:'off' }, `
            ${ type !== 'offline' && type !== 'add' ? `<input name="id" hidden>` : '' }
            <header class="header__EYmvy" >
                <a href="${ btnBack }" class="button__fe9vD after" ><i class="fa-solid fa-arrow-left"></i></a>
                <input type="text" class="input__RgGQ3" name="title" placeholder="titulo" />
            </header>
            <textarea class="textarea__yQsTw scrollbarY" spellcheck="false" name="details" placeholder="escriba algo" ></textarea>

            ${ btnSubmit ? `<button type="submit" class="button__wDuge" ><i class="fa-solid fa-arrow-right"></i></button>` : '' } 
        ` )
    )
    
    if( !btnSubmit  ){
        Data.element.title.readOnly = true 
        Data.element.details.readOnly = true
    }

    const _type = type === 'edit' ? 'note' : type === 'add' ? 'offline' : type
    const [ data = {} ] = await getDataNote( _type, id )
    const [{ token = false }] = JSON.parse( getLocalStorage( 'auth', '[{}]' ) )

    ChangeInputValue( Data.element, data )
 
    Data.element.addEventListener( 'input', ()=>{

        Data.data.title     = Data.element.title.value
        Data.data.details    = Data.element.details.value

        const _status = Data.data.title === '' && Data.data.details === '' 

        lstNotes.offline = _status ? lstNotesOffline : [ ...lstNotesOffline, Data.data   ] 
        if( type !== 'offline' && type !== 'add' ) if( Data.data.title === data.title && Data.data.details === data.details ) lstNotes.offline = lstNotesOffline 

        localStorage.setItem( 'lstNotes', JSON.stringify( lstNotes ) ) 
    } )

    Data.element.addEventListener( 'click', ()=>{ } )

    Data.element.addEventListener( 'submit', e => { 
        e.preventDefault() 

        lstNotes.offline = lstNotesOffline 

        if( Data.data.title === '' && Data.data.details === '' ){
            return setDataNote( 'delete', Data.data )
                .then( () => ( location.hash = btnBack ) ) 
        }

        const link = srcApi( `post/notes/${ type === 'offline' || type === 'add' ? 'add' : 'update' }?token=${ token }` )
        setData( new FormData( Data.element ), link )
            .then( resp => resp && ( localStorage.setItem( 'lstNotes', JSON.stringify( lstNotes ) ), location.hash = btnBack ) )
    } )
}

export default FormNote