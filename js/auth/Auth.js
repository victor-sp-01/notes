import App from "../App.js"
import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

const Auth =()=>{

    const verifyAuth = async ( token )=>{
        const auth = await getData( srcApi( `token/auth?token=${ token }` ) )

        if( auth ) return 
        
        localStorage.clear()
        App()
    }  
 
    const auth = JSON.parse( getLocalStorage( 'auth', 'false' ) )  
    
    if( auth ){ 
        const [ { token = false } ] = auth   
        setTimeout(()=> verifyAuth( token ) )
        return true 
    }

    return false
}

export default Auth

 