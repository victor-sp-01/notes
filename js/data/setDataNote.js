import srcApi from "../helpers/srcApi.js"
import { setData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"
import FormsData from "../helpers/FormsData.js"


const setDataNote = async ( ...datas )=>{
    
    const [{ token = false }] = JSON.parse( getLocalStorage( 'auth', '[{}]' ) ) 
    const[ action = false, data = {} ] = datas

    const Lst = JSON.parse( localStorage.getItem( 'Notes' ) )
    Lst.offline = Lst.offline.filter( _data => _data.id !== data.id && _data )
 
    if( token ){
        if( action === 'add' ){
            delete data.id
            if( data.title === '' && data.details === '' ) return false

            localStorage.setItem( 'Notes', JSON.stringify( Lst ))
 
            const _data = new FormData( FormsData( data ) )
            const link  = srcApi( `post/notes/${ action }?token=${ token }` )
 
            return await setData( _data, link )
        }
        
        else if( action === 'update' ){
            if( data.title === '' && data.details === '' ){

                const _data = new FormData( FormsData( { id : data.id } ) ) 
                const link = srcApi( `post/notes/delete?token=${ token }` )
        
                return await setData( _data, link )
            }

            localStorage.setItem( 'Notes', JSON.stringify( Lst ))
 
            const _data = new FormData( FormsData( data ) )
            const link  = srcApi( `post/notes/${ action }?token=${ token }` )
 
            return await setData( _data, link ) 
        }

        else if( action === 'delete' ){ 
             
            const _data = new FormData( FormsData( { id : data.id } ) ) 
            const link = srcApi( `post/notes/delete?token=${ token }` )
    
            return await setData( _data, link )
        }

        else if( action === 'trash' ){
 
            const _data = new FormData( FormsData( { id : data.id, status : '2' } ))
            const link = srcApi( `post/notes/trash?token=${ token }` )

            return await setData( _data, link )  

        }

        else if( action === 'recover' ){

            const _data = new FormData( FormsData( { id : data.id , status : '1' } ) ) 
            const link = srcApi( `post/notes/status?token=${ token }` )

            return await setData( _data, link )
        }

        else if( action === 'share' ){
            const _data = new FormData( FormsData( { id: data.id } ) ) 
            const link = srcApi( `post/notes/share?token=${ token }` )
    
            return await setData( _data, link )
        }

        else if( action === 'deleteShare' ){
            
            const _data = new FormData( FormsData( { id : data.id } ) ) 
            const link = srcApi( `post/sharenotes/delete?token=${ token }` ) 

            return await setData( _data, link )

        }

        else if( action === 'deleteOff' ){ 

            localStorage.setItem( 'Notes', JSON.stringify( Lst ))  
            return true

        }

    }

    return false 
}

export default setDataNote


 /*
        if( action === 'add' || action === 'update' ){ 

            if( action === 'update' ){
                if( data.title === '' && data.details === '' ){

                    const _data = new FormData( FormsData( { id : data.id } ) ) 
                    const link = srcApi( `post/notes/delete?token=${ token }` )
            
                    return await setData( _data, link )

                }
            } 
 
            const Lst = JSON.parse( localStorage.getItem( 'Notes' ) )

            Lst.offline = Lst.offline.filter( _data => _data.id !== data.id && _data )

            if( action !== 'update' ) delete data.id 

            localStorage.setItem( 'Notes', JSON.stringify( Lst ))
 
            const _data = new FormData( FormsData( data ) )
            const link  = srcApi( `post/notes/${ action }?token=${ token }` )
 
            return await setData( _data, link )  
        } 

        else if( action === 'delete' ){ 
             
            const _data = new FormData( FormsData( { id : data.id } ) ) 
            const link = srcApi( `post/notes/delete?token=${ token }` )
    
            return await setData( _data, link )
        }

        else if( action === 'trash' ){
 
            const _data = new FormData( FormsData( { id : data.id, status : '2' } ))
            const link = srcApi( `post/notes/trash?token=${ token }` )

            return await setData( _data, link )  

        }

        else if( action === 'recover' ){

            const _data = new FormData( FormsData( { id : data.id , status : '1' } ) ) 
            const link = srcApi( `post/notes/status?token=${ token }` )

            return await setData( _data, link )
        }

        else if( action === 'share' ){
            const _data = new FormData( FormsData( { id: data.id } ) ) 
            const link = srcApi( `post/notes/share?token=${ token }` )
    
            return await setData( _data, link )
        }

        else if( action === 'deleteShare' ){
            
            const _data = new FormData( FormsData( { id : data.id } ) ) 
            const link = srcApi( `post/sharenotes/delete?token=${ token }` ) 

            return await setData( _data, link )

        }

        else if( action === 'deleteOff' ){
            
            const Lst = JSON.parse( localStorage.getItem( 'Notes' ) )

            Lst.offline = Lst.offline.filter( _data => _data.id !== data.id && _data ) 
            localStorage.setItem( 'Notes', JSON.stringify( Lst ))  

            return true

        }

       
        else if( action === 'upload' ){

            const Lst = JSON.parse( localStorage.getItem( 'lstNotes' ) )

            Lst.offline = Lst.offline.filter( _data => _data.id !== data.id && _data )
            delete data.id  

            localStorage.setItem( 'lstNotes', JSON.stringify( Lst ))

            const _data = new FormData( FormsData( data ) )
            const link  = srcApi( `post/notes/add?token=${ token }` )
 
            return await setData( _data, link ) 

        }
        else return false*/