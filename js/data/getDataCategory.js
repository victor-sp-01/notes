import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

const getDataCategory = async ({ type = false, id = false })=>{

    const [{ token = false }] = JSON.parse( getLocalStorage( 'auth', '[{}]' ) )

    if( type === 'normal' ){
        if( id ) return await getData( srcApi(`get/notecategory/${ id }?token=${ token }`) )
        return await getData( srcApi(`get/notecategory?token=${ token }`) )
    }

    //const dataAsync = await getData( srcApi(`get/notecategory?token=${ token }`) )
}

export default getDataCategory