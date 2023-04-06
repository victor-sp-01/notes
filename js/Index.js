import App from "./App.js";
addEventListener( 'DOMContentLoaded', App )
addEventListener( 'hashchange', App )
addEventListener( 'contextmenu', e => e.preventDefault() )
addEventListener( 'focus', ()=>{
    
    const auth = localStorage.getItem( 'auth' )
    if( auth !== sessionStorage.getItem( 'auth' ) ){
        auth ? sessionStorage.setItem( 'auth', auth ) : sessionStorage.removeItem( 'auth' ) 
        App() 
    }

})
