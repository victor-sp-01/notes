import Elements from "../lib/Elements.js"

import { getLocalStorage } from "../api/apiLocalStorage.js" 

import Header from "../components/Header.js"
import Notes from "./Notes.js"

const Inicio =()=>{

    const element = new Elements()
    const classID = getLocalStorage( 'Time', Date.now() )

    element.innerHTML( {
        element : '#main',
        html    : (`<div class="div__5YMhu div-${ classID }" ></div>`)
    })  

    Header()
    Notes()
}

export default Inicio