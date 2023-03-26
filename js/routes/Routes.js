import App from "../App.js"

import { Params, changeParam } from "../helpers/Params.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

import Login from "../pages/Login.js"
import Register from "../pages/Register.js"

import Notes from "../pages/Notes.js"
import NotesOffline from "../pages/NotesOffline.js"
import NotesShare from "../pages/NotesShare.js"
import NotesTrash from "../pages/NotesTrash.js"

import FormNote from "../components/FormNote.js"

import Share from "../pages/Share.js"
import Setting from "../pages/Setting.js"
import PageNotFound from "../pages/PageNotFound.js"


const Routes =()=>{
    
    const validate  =( page )=>  page === ruta
    const rPrivate  =( page )=> auth ? page() : ( changeParam( '#login' ), App() )  
    const rPublic   =( page )=> auth ? ( changeParam( '#' ), App() ) : page() 

    const auth = JSON.parse( getLocalStorage( 'auth' ) )

    const params = Params()
    const [ ruta = false, ruta2 = false, ruta3 = false ] = params

 
    if( ruta === false ) return auth && Notes()
    else if( validate( 'login' ) ) return rPublic( Login ) 
    else if( validate( 'register' ) ) return rPublic( Register ) 
    else if( validate( 'share' ) ) return Share()
    else if( validate( 'setting' ) ) return rPrivate( Setting ) 
    else if( validate( 'list' ) ) return rPrivate(()=>{

            if( params.length === 2 ){
                if( ruta2 === 'note' ) return Notes()
                else if( ruta2 === 'offline' ) return NotesOffline()
                else if( ruta2 === 'share' ) return NotesShare()
                else if( ruta2 === 'trash' ) return NotesTrash()
            }
            else if( params.length === 3 ){
                FormNote( ruta2 )
            }

            
        }  
    ) 

    else if( validate( 'note' ) ) return rPrivate( FormNote )

    else return PageNotFound()

}

export default Routes