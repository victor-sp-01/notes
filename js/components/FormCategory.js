import App from "../App.js"
import { ModalOption } from "../modal/Modals.js"
import ChangeInputValue from "../helpers/ChangeInputValue.js" 

import getDataCategory from "../data/getDataCategory.js"
import setDataCategory from "../data/setDataCategory.js"

const FormCategory = async ( { type = true, id = false } )=>{

    const [ modalElement ] = ModalOption(`
        ${ id ? `<input name="id" hidden>` : '' }
        <input type="text" class="input__AIfl7" name="name" placeholder="escriba una categoria" >
        <div class="div__cOBMK" >
            ${ id ? `
                <button type="button" class="button__qDWQ5 after" id="btnDelete" ><i class="fa-solid fa-trash"></i></button> 
            ` : '' }
            <button type="submit" class="button__qDWQ5" ><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    `)

    if( id ){ 
        const [ data ] = await getDataCategory({ type : 'normal', id : id })
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