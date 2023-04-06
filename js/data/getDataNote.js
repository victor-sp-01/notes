import srcApi from "../helpers/srcApi.js"
import { Params } from "../helpers/Params.js"
import { getData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

const getDataNote = async ( ...datas )=>{

    const params = Params()
    const [ type = 'note', id = false ] = datas
    const [{ token = false }] = JSON.parse( getLocalStorage( 'auth', '[{}]' ) ) 

    if( token ){ 
        if( type === 'note' || type === 'edit' ){

            if( id ) return await getData( srcApi( `get/note/1/${ id }?token=${ token }` ) )
            return await getData( srcApi( `get/note/1?token=${ token }` ) )

        }

        else if( type === 'add' ){

            const { offline } = JSON.parse( localStorage.getItem( 'Notes' ) ) 
            const data = offline.filter( data => data.id === id )  
            
            if( id ) return data.length === 0 ? [{}] : data
            return offline

        }
    
        else if( type === 'offline' ){

            const { offline } = JSON.parse( localStorage.getItem( 'Notes' ) ) 
            const data = offline.filter( data => data.id === id )  

            if( id ) return data 
            return offline

        }
 
        else if( type === 'share' ){
            
            if( id ) return await getData( srcApi( `get/note/share/${ id }?token=${ token }` ) )
            return await getData( srcApi( `get/note/share?token=${ token }` ) )

        }
    
        else if( type === 'trash' ){

            if( id ) return await getData( srcApi( `get/note/2/${ id }?token=${ token }` ) )
            return await getData( srcApi( `get/note/2?token=${ token }` ) )
            
        }

        else if( type === 'category' ){ 
            return await getData( srcApi( `get/note/category/${ params[1] }?token=${ token }` ) )
        }
    } 

    if( type === 'noteshare' ){ 
        console.log( 'hola' )
        console.log( srcApi( `get/noteshare/${ id }` ) )
        if( id ) return await getData( srcApi( `get/noteshare/${ id }` ) )
        return []

    }

    return [] 
}

export default getDataNote