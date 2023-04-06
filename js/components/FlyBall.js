import Element from "../lib/Element.js"

const FlyBall =()=>{

    const $Element = new Element({
        button : { attributes : { class : 'button__wDuge' }, contents : {
            innerHTML : '<i class="fa-solid fa-plus"></i>'
        }}
    })

    $Element.create()
    $Element.append( { classID : '#root' } )
    $Element.element.addEventListener( 'click', ()=>{
        location.hash = `#list/add/${ Date.now() }`
    })

}

export default FlyBall