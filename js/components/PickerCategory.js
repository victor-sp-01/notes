import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

import { ModalOption } from "../modal/Modals.js"
import { CreateHTML } from "../lib/Elements.js"
import setDataCategory from "../data/setDataCategory.js"

const PickerCategory =async({ idCategory = false, changeIdCategory = false })=>{

    const [{ token = false }] = JSON.parse( getLocalStorage( 'auth', '[{}]' ) ) 
    const datas = await getData( srcApi(`get/notecategory?token=${ token }`) )  

    const [ modalElement, hideModalElement ] = ModalOption()

    const loadContent =()=>{
        modalElement.innerHTML = (`
            <div class="div__oVrui scrollbarY" >
                <button type="button" class="button__aOgET after EHBXal7pjdq0G7A" >
                    <span class="span__01tCe" >
                        <i class="fa-solid fa-plus"></i>
                    </span>
                    
                    <span>crear Categoria</span>
                </button>
                
                <div class="div__loNgB" > 
                    ${ datas.map( data =>{ 

                        return CreateHTML({

                            elements : {
                                '.button__yuHmx span' : { textContent : data.name }
                            },
                            html :(`
                                <button type="button" class="button__yuHmx after ${ data.id === idCategory ? 'select' : '' } Opqcw97Twh77z1X" data-id="${ data.id }" >
                                    <span> Musica </span>
                                    ${ data.id === idCategory ? '<i class="fa-solid fa-circle-check"></i>' : '' }
                                </button> 
                            `)

                        }) 
                    }).join('') }
                </div> 
            </div> 
        `)    
    };  loadContent()

    const loadFormCategory =()=>{
        modalElement.innerHTML = (`
        <div class="div__oVrui scrollbarY" >
            <button type="button" class="button__0MOKW after KJRj3j0gNJuLzts" ><i class="fa-solid fa-arrow-left"></i></button>
            
            <div class="div__loNgB" > 
            <input type="text" class="input__vbkD7" name="name" placeholder="escriba una categoria" >
                <div class="div__COvt4" > 
                    <button type="subtmit" class="button__qnn3R after lWUoIvV1WlDjheU" ><i class="fa-solid fa-arrow-right"></i></button>
                </div> 
            </div>
        </div>
        `)

        modalElement.name.select()
    }

    modalElement.addEventListener( 'click', ({ target })=>{
        if( target.classList.contains('Opqcw97Twh77z1X') )
            return( changeIdCategory( target.dataset.id ), hideModalElement() ) 
        
        if( target.classList.contains('EHBXal7pjdq0G7A') )
            return loadFormCategory()

        if( target.classList.contains( 'KJRj3j0gNJuLzts' ) )
            return loadContent()
    })

    
    modalElement.addEventListener( 'submit', e =>{
        e.preventDefault()

        const btnSubmit = e.submitter

        if( btnSubmit.classList.contains( 'lWUoIvV1WlDjheU' ) ){
            return setDataCategory( { action : 'add', data : modalElement } )
                .then( resp => resp && ( changeIdCategory( resp ), hideModalElement() ))
        }
    })
}
export default PickerCategory