const CreateElement =( datas )=>{  

    const elements = datas ? datas : false

    if( elements ){
        for( const element in elements ){
            const Element = document.createElement( element )

            const attributes = elements[ element ].attributes
            const contents = elements[ element ].contents
 
            for( const atribute in attributes )
                Element.setAttribute( atribute, attributes[ atribute ].trim() )

            for( const content in contents )
                Element[ content ] = contents[ content ].trim() 
            
            return Element
        }
    }

    return false
    
}

export default CreateElement


/*
    if( elements ){
        for( const element in elements ){
            const Element = document.createElement( element )

            const attributes = elements[ element ].attributes
            const contents = elements[ element ].contents
 
            for( const atribute in attributes )
                Element.setAttribute( atribute, attributes[ atribute ].trim() )

            for( const content in contents )
                Element[ content ] = contents[ content ].trim() 
            
            lstElements.push( Element )
        }
    } 
  
    return lstElements.length === 1 ? lstElements[0] : lstElements

    /*
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

    return lstElements.length === 1 ? lstElements[0] : lstElements*/
 