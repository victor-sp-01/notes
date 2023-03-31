const CreateElements =( datas )=>{  

    const Elements = datas ? datas : false
    const lstElements = []
    
    if( Elements ){
        Elements.forEach( elements => {
            const [ key ] = Object.keys(elements)

            if( key ){
                const Element = document.createElement( key )

                const attributes = elements[ key ].attributes
                const contents = elements[ key ].contents

                for( const atribute in attributes )
                    Element.setAttribute( atribute, attributes[ atribute ].trim() )
                
                for( const content in contents )
                    Element[ content ] = contents[ content ].trim() 
                
                lstElements.push( Element )
            }
            
        });
    }

    return lstElements

    /*
    console.log( datas )

    const elements = datas ? datas : false
    const lstElements = []

    elements.forEach( element => {
        const { type = '', attributes = {}, contents = {} } = element 
        const Element = document.createElement( type )  

        for( const atribute in attributes )
                Element.setAttribute( atribute, attributes[ atribute ].trim() )
        
        for( const content in contents )
                Element[ content ] = contents[ content ].trim()

        lstElements.push( Element )

    });

    return lstElements*/
}

export default CreateElements
 