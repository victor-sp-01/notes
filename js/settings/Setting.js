import { createLocalStorage } from "../api/apiLocalStorage.js"

const Setting =()=>{
    
    localStorage.setItem( 'Time', Date.now() )

    createLocalStorage( 'Categories', JSON.stringify( [] ) )

    createLocalStorage( 'Setting', JSON.stringify({
        color : '#6A8D93',
        noteOrder : 'month'
    }) )

    createLocalStorage( 'Notes', JSON.stringify( { 
        note : false, trash : false, share : false, offline : [] 
    } ) )
}

export default Setting