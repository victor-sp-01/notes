import CreateElement from "../helpers/CreateElement.js"
import Routes from "../routes/Routes.js"
const Main =()=>{

    document.getElementById( 'root' ).append(
        CreateElement( 'main', { class:'main', id:'main' } )
    ) 

    Routes()
}

export default Main