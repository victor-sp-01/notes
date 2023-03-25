const Params =( position = false )=>{
    const hash = location.hash.slice( 1 )
    const arrayPath = hash.split( '/' ) 
    const path = []
    
    for (let index = 0; index < arrayPath.length; index++) { 
        if( arrayPath[ index ] === '' ) break
        path.push( arrayPath[ index ]  )
    }

    return position ? path[ position ] : path
}

const changeParam =( _history )=> history.replaceState( null, null, _history );
const replaceParam =( _history )=> history.replaceState( null, null, _history );
const pushParam =( _history )=> history.pushState( null, null, _history );

const changeHash =( _value = '', _position = 0 )=>{
    const hash = location.hash.slice(1).split('/')
    hash[ _position ] = _value
    changeParam( `#${ hash.join('/') }` ) 
}

export { Params, changeParam, changeHash, replaceParam, pushParam }