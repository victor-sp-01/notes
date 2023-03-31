import Element from "../lib/Element.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

const Message =( html = '' )=>{

    const [{ auth = false }] = JSON.parse( getLocalStorage( 'auth', '[{}]' ) )
    console.log( auth )

    const $Element = new Element({
        div : { attributes : { class : 'div__8WBYR' }, contents : {
            innerHTML : (`
                <header class="header__6Bcvu" >
                    <a href="#${ auth ? '' : 'login' }" class="a__1swPs" ><i class="fa-solid fa-arrow-left"></i></a>
                </header>
                <div class="div__uUmOC" >
                    <div class="div__eq3zb" >${ html }</div>
                </div>
            `)
        }}
    })

    $Element.create()
    $Element.append( { classID : '#root' } ) 

}

export default Message