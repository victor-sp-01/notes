import { getLocalStorage } from "../api/apiLocalStorage.js"

const Message =( html = '' )=>{

    const [{ auth = false }] = JSON.parse( getLocalStorage( 'auth', '[{}]' ) )

    document.getElementById( 'root' ).innerHTML = (`
        <header class="header__6Bcvu" >
            <a href="#${ auth ? '' : 'login' }" class="a__1swPs" ><i class="fa-solid fa-arrow-left"></i></a>
        </header>
        <div class="div__uUmOC" >
            <div class="div__eq3zb" >${ html }</div>
        </div>
    `)
 
}

export default Message