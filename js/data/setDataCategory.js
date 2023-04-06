import srcApi from "../helpers/srcApi.js"
import { setData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

const setDataCategory = async ({ action = false, data = false })=>{
    const [{ token = false }] = JSON.parse( getLocalStorage( 'auth', '[{}]' ) )

    if( !action ) return false
    if( !data ) return false
    if( !token ) return false

    if( action === 'add' ) 
        return await setData( new FormData( data ), srcApi( `post/notecategory/add?token=${ token }` ) ) 
    
    else if( action === 'update' )  
        return await setData( new FormData( data ), srcApi( `post/notecategory/update?token=${ token }` ) ) 

    else if( action === 'delete' )
        return await setData( new FormData( data ), srcApi( `post/notecategory/delete?token=${ token }` ) ) 

    return false
}

export default setDataCategory