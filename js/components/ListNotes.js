import getDataNote from "../data/getDataNote.js"
import OpcDateNote from "./OpcDateNote.js"

import { createLocalStorage, getLocalStorage } from "../api/apiLocalStorage.js"
import { dateUTCtoDateMonthCustom, dateUTCtoDateCustom, dateUTCtoDateYear, dateUTCtoDateCustomMonthDay, dateUTCtoDateLocalMonthDay } from "../functions/dates.js"

const ListNotes = ( { lstElement, type } )=>{

    createLocalStorage( 'lstOrderNotes', 'month' )
    createLocalStorage( 'lstNotes', JSON.stringify( { note : false, trash : false, share : false, offline : [] } ) ) 

    const contentList =( lst = [] )=>{
        return  (`
            ${ lst.length === 0 ? `
                <div class="div__OkY6P" >
                    <h2 class="h2__26GyY" >lista vacia</h2>
                </div>
            ` : `
                ${ lst.map( (data, index) =>{
                    const order = getLocalStorage( 'lstOrderNotes', 'month' ) 
 
                    const date =  +data.dateUpdate || +data.dateLocal
                    const date2 = index === 0 ? date : +lst[ index - 1 ].dateUpdate || +lst[ index - 1 ].dateLocal 

                    let currentDate = 0, previousDate = 0

                    if( order === 'year' ){
                        currentDate = dateUTCtoDateYear( date )
                        previousDate = index === 0  ? currentDate : dateUTCtoDateYear( date2 )
                    } else if( order === 'month' ){
                        currentDate = dateUTCtoDateMonthCustom( date )
                        previousDate = index === 0  ? currentDate : dateUTCtoDateMonthCustom( date2 )
                    } else if( order === 'day' ){
                        currentDate = dateUTCtoDateCustom( date )
                        previousDate = index === 0  ? currentDate : dateUTCtoDateCustom( date2 )
                    }

                    return (`

                        ${ index === 0 || currentDate !== previousDate ? `
                            <div class="div__jKXJF">
                                <span class="span__74cTb" > ${ currentDate } </span>

                                ${ index === 0 ? `
                                    <div class="div__ZdG6w" >
                                        <button class="button__naz8q" >
                                            <i class="fa-solid fa-ellipsis-vertical"></i>
                                        </button>
                                    </div>
                                ` : ''
                                }
                                
                            </div>
                        ` : '' }
                        
                        <button class="button__hRa71 after 9md2DJaufRwfRugcCk47U9ssi" id="${ data.id }" >
                            <span class="span__E1K1Q" > ${ data.title || '' } </span>
                            <p class="p__vCWBK" > ${ data.details || '' } </p>
                        </button>
                    `)

                }).join('') }
        ` } `)
    }
 
    const loadList = async ()=>{ 

        const Lst = JSON.parse( getLocalStorage( 'lstNotes', '[{}]' ) ) 

        if( document.body.contains( lstElement ) ){

            if( Lst[ type ] ) lstElement.innerHTML = contentList( Lst[ type ] )

            const lst = await getDataNote( type ) 

            if( JSON.stringify( lst ) !== JSON.stringify( Lst[ type ] ) ){

                lstElement.innerHTML = contentList( lst )

                Lst[ type ] = lst
                localStorage.setItem( 'lstNotes', JSON.stringify( Lst ) ) 
                
            }

            const btnChangeDateList = lstElement.querySelector( '.button__naz8q' )

            if( btnChangeDateList )
                btnChangeDateList.addEventListener( 'click', () => OpcDateNote( loadList ))

        }      
    }   

    loadList()
}

export default ListNotes