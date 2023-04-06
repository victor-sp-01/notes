import Element from "../lib/Element.js"

const ModalElement =()=>{
 
    const $Element = new Element({
        div:{
            attributes : { class : 'div__9bBBt scrollbarY' },
            contents   : { innerHTML : (`
                <a class="a__NRqrI" ></a>
            `) }
        }
    })

    $Element.create()
    $Element.append( { classID : '#root' } )
    $Element.findChildren( '.a__NRqrI' ).addEventListener( 'click', ()=> hideElement() )

    const hideElement =()=> $Element.drop()

    return [ $Element.element, hideElement ]
}

const ModalApp =()=>{
    const $Element = new Element({
        div:{
            attributes : { class : 'div__ryt5I scrollbarY' },
            contents   : { innerHTML : (`
                <header class="header__TxOzp" >
                    <a href="#" class="a__ChSBE" ><i class="fa-solid fa-arrow-left"></i></a>
                </header>
                <div class="div__UMYXx" ></div>
            `) }
        }
    })

    $Element.create()
    $Element.append( { classID : '#root' } )
    return $Element.findChildren( '.div__UMYXx' )
}

const ModalOption =( html = '' )=>{
    const $Element = new Element({
        div:{
            attributes : { class : 'div__9bBBt scrollbarY' },
            contents   : { innerHTML : (`
                <a class="a__NRqrI" ></a>
                <form class="form__qv69y" autocomplete="off" >
                    <div class="div__oVrui scrollbarY" >${ html }</div>
                </form>
            `) }
        }
    })

    $Element.create()
    $Element.append( { classID : '#root' } )
    $Element.findChildren( '.a__NRqrI' ).addEventListener( 'click', ()=> hideElement() )

    const hideElement =()=> $Element.drop()

    return [ $Element.findChildren( '.form__qv69y' ), hideElement ]
}

export { ModalElement, ModalApp, ModalOption }