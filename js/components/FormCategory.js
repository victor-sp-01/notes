import App from "../App.js"
import { ModalOption } from "../modal/Modals.js"
import ChangeInputValue from "../helpers/ChangeInputValue.js" 

import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"
import setDataCategory from "../data/setDataCategory.js"

const FormCategory =async( { type = true, id = false } )=>{

    const [ modalElement ] = ModalOption(`
        ${ id ? `<input name="id" hidden>` : '' }
        <input type="text" class="input__vbkD7" name="name" placeholder="escriba una categoria" >
        <div class="div__COvt4" >
            ${ id ? `
                <button type="button" class="button__qnn3R after icon" id="btnDelete" ><i class="fa-solid fa-trash"></i></button> 
            ` : '' }
            <button type="submit" class="button__qnn3R" ><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    `)

    const [{ token = false }] = JSON.parse( getLocalStorage( 'auth', '[{}]' ) ) 

    if( id ){
        const [ data ] = await getData( srcApi(`get/notecategory/${ id }?token=${ token }`) )
        ChangeInputValue( modalElement, data )
    }

    modalElement.name.select()

    modalElement.addEventListener( 'click', e =>{
        if( modalElement.btnDelete === e.target ){

            setDataCategory( { action : 'delete', data : modalElement } )
                .then( resp => resp && App() )  
        }
    })

    modalElement.addEventListener( 'submit', e=>{
        e.preventDefault()
        
        setDataCategory( { action : type ? 'add' : 'update', data : modalElement } )
            .then( resp => resp && App() ) 

    })

}

export default FormCategory