import Components from "../lib/Components.js"
import Element from "../lib/Element.js"
import { CreateHTML } from "../lib/Elements.js"

import { Params } from "../helpers/Params.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"
import getDataCategory from "../data/getDataCategory.js"

import OpcUser from "./OpcUser.js"
import OpcNote from "./OpcNote.js"

import FormCategory from "./FormCategory.js"

const Header = async ()=>{
 
    const [{ token = false }] = JSON.parse( getLocalStorage( 'auth', '[{}]' ) ) 
    if( !token ) return

    const param = Params( 1 ) || ''

    const $Element = new Element({
        header: { attributes : { class:'header__IhVQo' }, contents : {
            innerHTML : (`
                <div class="div__lXfEW" >
                    <div class="div__v3hnx" >
                        <button class="button__Xlu5A" id="button__LJJRra64kf" ><i class="fa-solid fa-bars"></i></button>
                        <span class="span__E108V" ></span>
                        <button class="button__Xlu5A" id="button__xjPkeyjNvb" ><i class="fa-solid fa-ellipsis-vertical"></i></button>
                    </div>
                    <div class="div__26NVF" >  
                        <div class="div__YB9qT" >
                            <div class="div__PmOs3" >
                                <a href="#" class="a__rzots after${ param === '' ? ' focus' : '' }" > 
                                    <span class="span__cMsEk" >todo</span>
                                </a>
                                <a href="#list/offline" class="a__rzots after${ param === 'offline' ? ' focus' : '' }" >
                                    <span class="span__cMsEk" >offline</span>
                                </a>
                                <a href="#list/share" class="a__rzots after${ param === 'share' ? ' focus' : '' }" >
                                    <span class="span__cMsEk" >share</span>
                                </a> 
                            </div>
                            <span class="span__G5oMm" ></span> 
                            <div class="div__PmOs3 div-VmCJ3MVKPH" ></div>
                        </div> 
                        <button class="button__EZenO" id="button__ybsXpwc1OF" ><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            `)
        }}
    })

    $Element.create()
    $Element.append( { classID : '#root' } )
    
    $Element.findChildren( '#button__LJJRra64kf' ).addEventListener( 'click', OpcUser )
    $Element.findChildren( '#button__xjPkeyjNvb' ).addEventListener( 'click', OpcNote ) 
    $Element.findChildren( '#button__ybsXpwc1OF' ).addEventListener( 'click', FormCategory )

    const data = JSON.parse( getLocalStorage( 'Categories', '[]' ) )

    const $elementCategory = new Components({
        element : $Element.findChildren( '.div__PmOs3.div-VmCJ3MVKPH' ),
        data    : data,
        template: ( props )=>{
            if( props.length === 0 ) return '' 
            return props.map( data =>{ 
                return CreateHTML({
                    elements : {
                        '.span__cMsEk' : { textContent : data.name || '' }
                    },
                    html : (`
                        <a href="#list/${ data.id }" class="a__rzots after${ param === data.id ? ' focus' : '' }" >
                            <span class="span__cMsEk" ></span>
                        </a> 
                    `)
                }) 
            }).join('')
        }
    })
    
    if( data.length !== 0 ) $elementCategory.render()

    const dataAsync = await getDataCategory({ type : 'normal' })
    
    if( JSON.stringify( dataAsync ) !== JSON.stringify( data ) ){
        $elementCategory.data = dataAsync
        $elementCategory.render()

        localStorage.setItem( 'Categories', JSON.stringify( dataAsync ) ) 
    } 
    
}

export default Header