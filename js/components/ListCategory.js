import Components from "../lib/Components.js"
import { CreateHTML } from "../lib/Elements.js"

import { getLocalStorage } from "../api/apiLocalStorage.js"
import getDataCategory from "../data/getDataCategory.js"

const ListCategory = async ()=>{

    const data = JSON.parse( getLocalStorage( 'Categories', '[]' ) )
    const classID   = getLocalStorage( 'Time', Date.now() )  

    const $Element = new Components({
        classID : `.div__6fEXq.div-${ classID }`,
        data    : data,
        template:( props )=>{  

            if( props.length === 0 ){
                return (`
                    <div class="div__4WpuJ scrollbarY" >
                        <div class="div__um0ux" >
                            <h3>La Lista Esta Vacia</h3>
                            <img src="./img/icons/no-data.png" alt="">
                        </div>
                    </div>               
                `)
            }

            return props.map( data => { 
                return CreateHTML({
                    elements : {
                        '.button__gOaRy h3' : { textContent : data.name },
                        '.a__RPgtK span' : { textContent : `${ data.notes } notes` }
                    },
                    html : (`
                        <div class="div__U7AFF" >
                            <button class="button__gOaRy after d5NP6IpIG4fEQv2" id="${ data.id }" >
                                <h3></h3>
                                <i class="fa-solid fa-pen"></i>
                            </button>
                            <span class="span__QIyQG" ></span>
                            <a href="#list/${ data.id }" class="a__RPgtK" >
                                <span></span>
                                <i class="fa-solid fa-angle-right"></i>
                            </a>
                        </div>
                    `)
                })
            }).join('')
        }
    })

    $Element.render()

    const dataAsync = await getDataCategory({ type : 'normal' }) 

    if( JSON.stringify( dataAsync ) !== JSON.stringify( data ) ){
        $Element.data = dataAsync
        $Element.render()

        localStorage.setItem( 'Categories', JSON.stringify( dataAsync ) )
    }

}

export default ListCategory