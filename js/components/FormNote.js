import { Params } from "../helpers/Params.js"

import getDataNote from "../data/getDataNote.js"
import setDataNote from "../data/setDataNote.js"

import ChangeInputValue from "../helpers/ChangeInputValue.js"

const FormNote = async ( type )=>{

    const Data = {
        btnBack : type === 'add' || type === 'edit' ? '#' : `#list/${ type }`,
        btnSubmit : type === 'add' || type === 'edit' || type === 'offline',
        time : Date.now(),
        
        data : {}
    }

    document.getElementById( 'main' ).innerHTML = `
        <form class="form__zWDsn form-${ Data.time }" >
            <div class="div__OkY6P" >
                <span class="span__j6i6j" ></span>
            </div>
        </form>
    `

    const id = Params(2)
    const [ data = false ] = await getDataNote( type, id ) 

    const lstNotes = JSON.parse( localStorage.getItem( 'Notes' ) ) 
    const lstNotesOffline = lstNotes.offline.filter( data => data.id !== id && data )

    const element = document.querySelector( `.form__zWDsn.form-${ Data.time }` ) 

    element.innerHTML = `
        ${ data || type === 'add' ? 
        `
            ${ type !== 'offline' && type !== 'add' ? `<input name="id" readonly hidden>` : '' }
            <header class="header__EYmvy" >
                <button type="button" class="button__fe9vD after refHO97dZ5ftYY7R6rhb" data-action="Back" ><i class="fa-solid fa-arrow-left"></i></button>
                <div class="div__FZtoc" > 
                    ${ Data.btnSubmit ? `<button type="submit" class="button__fe9vD after" data-action="Back" ><i class="fa-solid fa-check"></i></button>` : '' }
                    
                    <button type="button" class="button__fe9vD after" data-action="option" ><i class="fa-solid fa-ellipsis-vertical"></i></button> 
                </div>
            </header>
            <input type="text" class="input__RgGQ3" name="title" placeholder="titulo" readonly />
            <textarea class="textarea__yQsTw scrollbarY" spellcheck="false" name="details" placeholder="escriba algo" readonly ></textarea>
        `
        :    

        `
            <div class="div__OkY6P" >
                <div class="div__TehZg scrollbarY" >
                    <h3>El elemento no Existe o ha Sido Eliminado</h3>
                    <img src="./img/icons/no-content.png" alt="">
                </div>
            </div> 
        `
        }
           
    `
    
    ChangeInputValue( element, data )
 
    if( ( Data.btnSubmit && data ) || type === 'add' ){

        data.id = id
        data.title = data.title || ''
        data.details = data.details || ''

        element.title.readOnly = false 
        element.details.readOnly = false

    }

    Data.data = JSON.parse( JSON.stringify( data ) )
 
    element.addEventListener( 'input', ( { target } )=>{
        
        const _name = target.name 

        if( _name === 'title' || _name === 'details' ){
            data[ _name ] = target.value 
 
            if( data.title !== '' && data.details !== '' ){ 

                lstNotes.offline = [ ...lstNotesOffline, {
                    id: id,
                    title : data.title,
                    details: data.details,
                    dateLocal : Data.time
                } ] 

            }

            else lstNotes.offline = lstNotesOffline

            if( type !== 'offline' && type !== 'add' )
                if( JSON.stringify( Data.data ) === JSON.stringify( data )  )
                    lstNotes.offline = lstNotesOffline 

            localStorage.setItem( 'Notes', JSON.stringify( lstNotes ) ) 
        }
 
    })

    element.addEventListener( 'click', ( {target} ) =>{

        if( target.classList.contains( 'refHO97dZ5ftYY7R6rhb' ) ){ 
            
            setDataNote( type === 'offline' || type === 'add' ? 'add' : 'update', data )
                .then( () => ( location.hash = Data.btnBack ) )

        }

    } )

    element.addEventListener( 'submit', e => { 
        e.preventDefault() 

        setDataNote( type === 'offline' || type === 'add' ? 'add' : 'update', data )
            .then( () => ( location.hash = Data.btnBack ) )

    })
 
}

export default FormNote
 