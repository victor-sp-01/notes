import { Params } from "../helpers/Params.js"
import getDataNote from "../data/getDataNote.js"

import ChangeInputValue from "../helpers/ChangeInputValue.js"
import Message from "../components/Message.js"
const Share = async ()=>{

    const Data = {  
        time : Date.now() 
    }

    document.getElementById( 'main' ).innerHTML = (`
        <form class="form__zWDsn form-${ Data.time }" >
            <div class="div__OkY6P" >
                <span class="span__j6i6j" ></span>
            </div>
        </form>
    `)

    const id = Params(1)
    const [ data = false ] = id ? await getDataNote( 'noteshare', id ) : []
    const element = document.querySelector( `.form__zWDsn.form-${ Data.time }` )   

    if( data ){
        element.innerHTML = (`
            <input name="id" readonly hidden>
            <header class="header__EYmvy" >
                <a href="#" class="button__fe9vD after" ><i class="fa-solid fa-arrow-left"></i></a> 
            </header>
            <input type="text" class="input__RgGQ3" name="title" placeholder="titulo" readonly />
            <textarea class="textarea__yQsTw scrollbarY" spellcheck="false" name="details" placeholder="escriba algo" readonly ></textarea>
        `) 
    } else {
        Message(`
            <h3>El elemento no Existe o ha Sido Eliminado</h3>
            <img src="./img/icons/no-content.png" alt="">
        `)
    } 

    ChangeInputValue( element, data )
    element.addEventListener( 'submit', e => e.preventDefault()  )
}

export default Share