import getDataNote from "../data/getDataNote.js"
import setDataNote from "../data/setDataNote.js"

import srcApi from "../helpers/srcApi.js"
import { Params } from "../helpers/Params.js"
import { setData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"
import FormsData from "../helpers/FormsData.js"

import CreateElement from "../helpers/CreateElement.js"
import ChangeInputValue from "../helpers/ChangeInputValue.js"

const FormNote = async( type )=>{

    const id = Params(2)
    const time = Date.now()

    const Data = {
        btnBack : type === 'edit' || type === 'add' ? '#' : `#list/${ type }`,
        btnSubmit : type === 'add' || type === 'edit' || type === 'offline',
        
    }

    document.getElementById( 'root' ).innerHTML = `
        <form class="form__zWDsn form-${ time }" >
            ${ type !== 'offline' && type !== 'add' ? `<input name="id" hidden>` : '' }

            <header class="header__EYmvy" >
                <button type="button" class="button__fe9vD after refHO97dZ5ftYY7R6rhb" data-action="Back" ><i class="fa-solid fa-arrow-left"></i></button>
            </header>

            <input type="text" class="input__RgGQ3" name="title" placeholder="titulo" readonly />
            <textarea class="textarea__yQsTw scrollbarY" spellcheck="false" name="details" placeholder="escriba algo" readonly ></textarea>
            
            ${ Data.btnSubmit ? `<button type="submit" class="button__wDuge" ><i class="fa-solid fa-arrow-right"></i></button>` : '' }
        </form>
    `

    const element = document.querySelector( `.form__zWDsn.form-${ time }` ) 

    /*
    const Data = {
        element : '',
        btnBack : type === 'edit' || type === 'add' ? '#' : `#list/${ type }`,
        btnSubmit : type === 'add' || type === 'edit' || type === 'offline',
        time    : Date.now(),
    } 
 
    document.getElementById( 'root' ).append( 
        Data.element = CreateElement( 'form', { class : 'form__zWDsn', autocomplete:'off' }, `
            ${ type !== 'offline' && type !== 'add' ? `<input name="id" hidden>` : '' }
            <header class="header__EYmvy" >
                <button type="button" class="button__fe9vD after refHO97dZ5ftYY7R6rhb" data-action="Back" ><i class="fa-solid fa-arrow-left"></i></button>
            </header>
            <input type="text" class="input__RgGQ3" name="title" placeholder="titulo" readonly />
            <textarea class="textarea__yQsTw scrollbarY" spellcheck="false" name="details" placeholder="escriba algo" readonly ></textarea>

            ${ Data.btnSubmit ? `<button type="submit" class="button__wDuge" ><i class="fa-solid fa-arrow-right"></i></button>` : '' } 
        ` )
    )

    const id = Params(2) 

    const lstNotes = JSON.parse( localStorage.getItem( 'lstNotes' ) ) 
    const lstNotesOffline = lstNotes.offline.filter( data => data.id !== id )

    const _type = type === 'edit' ? 'note' : type === 'add' ? 'offline' : type
    const [ data = {} ] = await getDataNote( _type, id )

    ChangeInputValue( Data.element, data )

    if( Data.btnSubmit  ){
        Data.element.title.readOnly = false 
        Data.element.details.readOnly = false
    }

    Data.element.addEventListener( 'input', ( { target } )=>{

        const _name = target.name 

        if( _name === 'title' || _name === 'details' ){
            data[ _name ] = target.value 

            if( data.title === '' && data.details === '' ){ 
                if( type !== 'offline' && type !== 'add' )
                    if( Data.data.title === data.title && Data.data.details === data.details )
                        lstNotes.offline = lstNotesOffline 

                lstNotes.offline = lstNotesOffline
            } else { lstNotes.offline = [ ...lstNotesOffline, Data.data   ] }


            localStorage.setItem( 'lstNotes', JSON.stringify( lstNotes ) ) 
        }
 
    })

    Data.element.addEventListener( 'click', ( {target} ) =>{

        if( target.classList.contains( 'refHO97dZ5ftYY7R6rhb' ) ){ 

            setDataNote( type === 'offline' || type === 'add' ? 'add' : 'update', data )
                .then( () => ( location.hash = Data.btnBack ) )

        }

    } )

    Data.element.addEventListener( 'submit', e => { 
        e.preventDefault() 

        setDataNote( type === 'offline' || type === 'add' ? 'add' : 'update', data )
            .then( () => ( location.hash = Data.btnBack ) )

    } )


    /*
    if( !btnSubmit  ){
        Data.element.title.readOnly = true 
        Data.element.details.readOnly = true
    }

    const _type = type === 'edit' ? 'note' : type === 'add' ? 'offline' : type
    const [ data = {} ] = await getDataNote( _type, id )
    ChangeInputValue( Data.element, data )


    Data.element.addEventListener( 'input', ( { target } )=>{

        const _name = target.name 

        if( _name === 'title' || _name === 'details' ){
            data[ _name ] = target.value 
            Data.data[ _name ] = target.value

            if( data.title === '' && data.details === '' ){
            
            }
        }
 
    })

    Data.element.addEventListener( 'click', ( {target} ) =>{

        if( target.classList.contains( 'refHO97dZ5ftYY7R6rhb' ) ){ 

            setDataNote( type === 'offline' || type === 'add' ? 'add' : 'update', data )
                .then( () => ( location.hash = btnBack ) )

        }

    } )

    Data.element.addEventListener( 'submit', e => { 
        e.preventDefault() 

        setDataNote( type === 'offline' || type === 'add' ? 'add' : 'update', data )
            .then( () => ( location.hash = btnBack ) )
    } )




    /*
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
                <button type="button" class="button__fe9vD after refHO97dZ5ftYY7R6rhb" data-action="Back" ><i class="fa-solid fa-arrow-left"></i></button>
            </header>
            <input type="text" class="input__RgGQ3" name="title" placeholder="titulo" />
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
        if( type !== 'offline' && type !== 'add' ) 
            if( Data.data.title === data.title && Data.data.details === data.details ) lstNotes.offline = lstNotesOffline 

        localStorage.setItem( 'lstNotes', JSON.stringify( lstNotes ) ) 
    } )

    Data.element.addEventListener( 'click', ( {target} ) =>{

        if( target.classList.contains( 'refHO97dZ5ftYY7R6rhb' ) ){ 

            setDataNote( type === 'offline' || type === 'add' ? 'add' : 'update', data )
                .then( () => ( location.hash = btnBack ) )

        }

    } )

    Data.element.addEventListener( 'submit', e => { 
        e.preventDefault() 

        setDataNote( type === 'offline' || type === 'add' ? 'add' : 'update', data )
            .then( () => ( location.hash = btnBack ) )
    } )
  */
}

export default FormNote


/*
    const saveNote =()=>{
        lstNotes.offline = lstNotesOffline 

        if( Data.data.title === '' && Data.data.details === '' ){
            return setDataNote( 'delete', Data.data )
                .then( () => ( location.hash = btnBack ) ) 
        }

        const link = srcApi( `post/notes/${ type === 'offline' || type === 'add' ? 'add' : 'update' }?token=${ token }` )
        setData( new FormData( Data.element ), link )
            .then( resp => resp && ( localStorage.setItem( 'lstNotes', JSON.stringify( lstNotes ) ), location.hash = btnBack ) )
    }*/