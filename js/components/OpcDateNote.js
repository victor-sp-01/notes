import { getLocalStorage } from "../api/apiLocalStorage.js"
import ModalElement from "../modal/ModalElement.js"

const OpcDateNote =( loadList )=>{

    const [ element, hideElement ] = ModalElement( 'form', { class : 'form__qv69y', autocomplete : 'off' },`
        <div class="div__oVrui" ></div>
    ` )

    const elementHTML = element.querySelector( '.div__oVrui' )
    
    const htmlOption =()=>{

        elementHTML.innerHTML = `
            <button type="button" class="button__m0nNx after dI0rS9fmJepx64fJHRZW" data-action="changeDateList" >
                <i class="fa-solid fa-calendar-days"></i>
                <span> change list day </span>
                <i class="fa-solid fa-caret-right"></i>
            </button> 
        `

    }

    htmlOption()

    const htmlOptions =( action )=>{  
        
        elementHTML.innerHTML = `
            <button type="button" class="button__0MOKW after Uegw7VdifSI2jt9a37w9" ><i class="fa-solid fa-arrow-left"></i></button>
            
            <div class="div__loNgB" > 
                ${ action === 'changeDateList' ? htmlOptionsChangeDateList() : '' }
            </div>
        `

    }

    const htmlOptionsChangeDateList =()=>{
        const NotesOrder = getLocalStorage( 'NotesOrder', 'month' )

        return [ 'day', 'month', 'year' ].map( ( data )=>{

            return (`
                <button type="button" class="button__yuHmx after${ data === NotesOrder ? ' select ' : ' ' }LFrO7mL2NZVAXtViOa9h" data-date="${ data }" >
                    <span> ${ data } </span>
                    ${ data === NotesOrder ? '<i class="fa-solid fa-circle-check"></i>' : '' }
                </button>
            `)

        } ).join('')
    }

    element.addEventListener( 'click', ({target})=> {
        
        if( target.classList.contains( 'Uegw7VdifSI2jt9a37w9' ) ) return htmlOption()
        if( target.classList.contains( 'dI0rS9fmJepx64fJHRZW' ) ) return htmlOptions( target.dataset.action )
        if( target.classList.contains( 'LFrO7mL2NZVAXtViOa9h' ) ) {
            localStorage.setItem( 'NotesOrder', target.dataset.date )
            loadList()
            return hideElement()
        } 

    } )

    element.addEventListener( 'submit', e=> e.preventDefault() )
}

export default OpcDateNote