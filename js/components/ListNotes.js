import Components from "../lib/Components.js"
import { CreateHTML } from "../lib/Elements.js"

import getDataNote from "../data/getDataNote.js"
import Message from "./Message.js"

import { Params } from "../helpers/Params.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"
import { dateUTCtoDateMonthCustom, dateUTCtoDateCustom, dateUTCtoDateYear, dateUTCtoDateCustomMonthDay, dateUTCtoDateLocalMonthDay } from "../functions/dates.js"

const ListNotes = async ()=>{

    const type      = Params(1) || 'note'
    const classID   = getLocalStorage( 'Time', Date.now() ) 
    const Datas     = JSON.parse( getLocalStorage( 'Notes', '[{}]' ) ) 

    const $Element = new Components({
        classID : `.div__vkNWh.div-${ classID }`,
        data    : Datas[ type ] || [],
        template: (props)=>{
            const Element = document.createElement( 'div' )

            if( props.length === 0 ){ 

                if( type === 'trash' ){
                    Message( `
                        <h3>La Lista Esta Vacia</h3>
                        <img src="./img/icons/no-data.png" alt="">
                    ` )
                } else { 

                    return Element.innerHTML = (`
                        <div class="div__rfyDj scrollbarY" >
                            <div class="div__eq3zb" >
                                <h3>La Lista Esta Vacia</h3>
                                <img src="./img/icons/no-data.png" alt="">
                            </div>
                        </div>
                    `)
                }
                
                return ''

            }

            props.forEach( (data, index) => {

                const { noteOrder = 'month' } = JSON.parse( getLocalStorage( 'Setting', '[{}]' ) ) 

                const date =  +data.dateUpdate || +data.dateLocal
                const date2 = index === 0 ? date : +props[ index - 1 ].dateUpdate || +props[ index - 1 ].dateLocal 

                let currentDate = 0, previousDate = 0, customDate = ''

        
                if( noteOrder === 'year' ){
                    currentDate = dateUTCtoDateYear( date )
                    previousDate = index === 0  ? currentDate : dateUTCtoDateYear( date2 )
                    customDate = dateUTCtoDateCustomMonthDay(date)
                } else if( noteOrder === 'month' ){
                    currentDate = dateUTCtoDateMonthCustom( date )
                    previousDate = index === 0  ? currentDate : dateUTCtoDateMonthCustom( date2 )
                    customDate = dateUTCtoDateLocalMonthDay(date)
                } else if( noteOrder === 'day' ){
                    currentDate = dateUTCtoDateCustom( date )
                    previousDate = index === 0  ? currentDate : dateUTCtoDateCustom( date2 )
                }

                Element.insertAdjacentHTML( 'beforeend', CreateHTML( {
                    elements : {
                        '.span__E1K1Q' : { textContent : data.title || '' },
                        '.p__vCWBK' : { textContent : data.details || '' },
                        '.span__YKWWm' : { textContent : customDate } 
                    },
                    html    : `

                    ${ index === 0 || currentDate !== previousDate ? `
                    <div class="div__jKXJF">
                        <span class="span__74cTb" > ${ currentDate } </span>
                    </div>` : '' }
                    
                    <button class="button__hRa71 after 9md2DJaufRwfRugcCk47U9ssi" style="--i:${ index }s" id="${ data.id }" >
                        <div class="div__9pIxD" >
                            <span class="span__E1K1Q" ></span>
                            <span class="span__YKWWm" >fecha</span>
                        </div>
                        <p class="p__vCWBK" ></p>
                    </button>
                    `
                })) 
            });
            
            return Element.innerHTML
        }
    })

    if( Object.keys( Datas ).includes( type ) ) { 

        $Element.render()
        const dataAsync = await getDataNote( type )

        if( JSON.stringify( dataAsync ) !== JSON.stringify( Datas[ type ] ) ){

            Datas[ type ] = dataAsync.slice( 0, type === 'offline' ? 50 : 25 )
            localStorage.setItem( 'Notes', JSON.stringify( Datas ) )

            $Element.data = dataAsync 
            return $Element.render() 
            
        }
        
        return
        
    }

    const dataByCategory = await getDataNote( 'category' )

    $Element.data = dataByCategory 
    $Element.render()
    
}

export default ListNotes

 