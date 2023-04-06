import { getLocalStorage } from "../api/apiLocalStorage.js"
import { ModalApp } from "../modal/Modals.js"

import ListCategory from "../components/ListCategory.js"
import FormCategory from "../components/FormCategory.js"

const Category =()=>{ 
    
    const Element = ModalApp() 
    const classID = getLocalStorage( 'Time', Date.now() )

    Element.innerHTML = (`
        <div class="div__6fEXq div-${ classID }" >
            <div class="div__OkY6P" >
                <span class="span__j6i6j" ></span>
            </div>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    `)

    ListCategory()

    Element.addEventListener( 'click', e =>{
        if( e.target.classList.contains( 'd5NP6IpIG4fEQv2' ) ){
            FormCategory( {
                type : false,
                id   : e.target.id
            } )
        }
    })
    
}
export default Category

/*
    const Element = ModalApp()
    const classID = getLocalStorage( 'Time', Date.now() )

    Element.innerHTML = (`
        <div class="div__ZfjeC scrollbarY" >
            <div class="div__vkNWh div-${ classID }" ></div>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    `) 
       
    
    ListCategory()
    */

/*
    const type = 'trash'
    const time = `t${ Date.now() }`
    const element = ModalApp( type )
    element.innerHTML = `
        <div class="div__rfyDj">
            <div class="div__vkNWh ${ time }" >
                <div class="div__OkY6P" >
                    <span class="span__j6i6j" ></span>
                </div>
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

    ListNotes( Data ) */