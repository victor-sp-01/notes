import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

const getDataNote = async ( ...datas )=>{

    const [ type = 'note', id = false ] = datas
    const [{ token = false }] = JSON.parse( getLocalStorage( 'auth', '[{}]' ) ) 
    
    if( token ){
        if( type === 'note' || type === 'edit' ){

            if( id ) return await getData( srcApi( `get/notes/1/${ id }?token=${ token }` ) )
            return await getData( srcApi( `get/notes/1?token=${ token }` ) )

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
            
            if( id ) return await getData( srcApi( `get/notes/share/${ id }?token=${ token }` ) )
            return await getData( srcApi( `get/notes/share?token=${ token }` ) )

        }
    
        else if( type === 'trash' ){

            if( id ) return await getData( srcApi( `get/notes/2/${ id }?token=${ token }` ) )
            return await getData( srcApi( `get/notes/2?token=${ token }` ) )
            
        }
    }

    return [] 
}

export default getDataNote