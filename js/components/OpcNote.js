import App from "../App.js"
import ListNotes from "./ListNotes.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

import { ModalOption } from "../modal/Modals.js"

const OpcNote =()=>{

    const datas = JSON.parse( getLocalStorage( 'Setting', 'false' ) )
    const [ modalElement, hideModalElement ] = ModalOption()

    const loadOption =()=>{
        modalElement.innerHTML = (`
            <div class="div__oVrui" >
                <button type="button" class="button__m0nNx after dI0rS9fmJepx64fJHRZW" data-action="changeColor" >
                    <i class="fa-solid fa-palette"></i>
                    <span> change color </span>
                </button>
                <button type="button" class="button__m0nNx after dI0rS9fmJepx64fJHRZW" data-action="changeDateList" >
                    <i class="fa-solid fa-calendar-days"></i>
                    <span> change list day </span> 
                </button> 
            </div>
        `)
    }

    loadOption()

    const loadOptions =( action )=>{
        modalElement.innerHTML = (`
            <div class="div__oVrui" >
                <button type="button" class="button__0MOKW after Uegw7VdifSI2jt9a37w9" ><i class="fa-solid fa-arrow-left"></i></button>
                
                <div class="div__loNgB" > 
                    ${ action === 'changeColor' ? htmlOptionsChangeColor() : '' }
                    ${ action === 'changeDateList' ? htmlOptionsChangeDateList() : '' }
                </div>
            </div>
        `) 
    }

    const htmlOptionsChangeColor =()=>{ 

        const color = datas.color

        return( ` 
            <div class="div__IM87L" >
                <label class="label__15VqS" style="background : ${ color }" for="newColor" >
                    <input type="color" id="newColor" value="${ color }" >
                    <span>${ color }</span>
                </label>
                <button type="button" class="button__4uumK after btn-iWCJMIoNWAcOezkYe7dd" data-action="changeColor" ><i class="fa-solid fa-arrow-right"></i></button>
            </div> 
        ` )
    }

    const htmlOptionsChangeDateList =()=>{ 
        const order = datas.noteOrder

        return [ 'day', 'month', 'year' ].map( ( data )=>{

            return (`
                <button type="button" class="button__yuHmx after${ data === order ? ' select ' : ' ' }LFrO7mL2NZVAXtViOa9h" data-date="${ data }" >
                    <span> ${ data } </span>
                    ${ data === order ? '<i class="fa-solid fa-circle-check"></i>' : '' }
                </button>
            `)

        } ).join('')
    }

    modalElement.addEventListener( 'change', ({target})=> {

        if( target === modalElement.newColor ){ 
            target.nextElementSibling.textContent = target.value
            target.parentElement.style.background = target.value
        }
 
    })

    modalElement.addEventListener( 'click', ({target})=> {
 
        if( target.classList.contains( 'Uegw7VdifSI2jt9a37w9' ) ) return loadOption()
        if( target.classList.contains( 'dI0rS9fmJepx64fJHRZW' ) ) return loadOptions( target.dataset.action )

        if( target.classList.contains( 'LFrO7mL2NZVAXtViOa9h' ) ) {  
            datas.noteOrder = target.dataset.date
            localStorage.setItem( 'Setting', JSON.stringify( datas ) )
            hideModalElement()
            return ListNotes()
        } 

        if( target.classList.contains( 'btn-iWCJMIoNWAcOezkYe7dd' ) ){ 

            if( modalElement.newColor.value !== datas.color ){
                datas.color = modalElement.newColor.value
                localStorage.setItem( 'Setting', JSON.stringify( datas ) )
                return App()
            }
            
            return hideModalElement()
        }

    })

   modalElement.addEventListener( 'submit', e=> e.preventDefault() )
 
}

export default OpcNote
 