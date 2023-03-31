import Element from "../lib/Element.js"

const FlyBall =()=>{

    const $Element = new Element({
        a : { attributes : { class : 'button__wDuge', href: `#list/add/${ Date.now() }` }, contents : {
            innerHTML : '<i class="fa-solid fa-plus"></i>'
        }}
    })

    $Element.create()
    $Element.append( { classID : '#root' } )

    //<a href="#list/add/${ Date.now() }" class="button__wDuge" ><i class="fa-solid fa-plus"></i></a>
}

export default FlyBall