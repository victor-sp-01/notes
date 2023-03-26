import OpcUser from "./OpcUser.js"
import CreateElement from "../helpers/CreateElement.js" 

const Header =()=>{
    
    document.getElementById( 'root' ).append(
        CreateElement( 'header', { class:'header__LnDL7' }, `
            <button class="button__UKRR2" id="button__LJJRra64kf" ><i class="fa-solid fa-bars"></i></button>
        ` )
    ) 
 
    button__LJJRra64kf.addEventListener( 'click', OpcUser )  
}

export default Header