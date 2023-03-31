class Elements { 

    constructor(){
        this._element
    }

    changeElement( element ){ this._element = element } 

    innerHTML( { element = false, html = '' } ){
        this.changeElement( document.querySelector( element ) ) 

        if( this._element ) 
            this._element.innerHTML = ( html ) 
    }

    create( elements = false ){ 

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

    createHTML( { elements = false, html = '' } ){ 

        const Element = this.create( { div : { contents : { innerHTML : html.trim() } } }) 

        if( elements ){
            for( const element in elements ){
                const _element = Element.querySelector( element )
        
                if( _element ){
                    const dataElement = elements[ element ]
                    for( const attributes in dataElement )
                        _element[ attributes ] = dataElement[ attributes ]
                } 
        
            }
        }
    
        return Element.innerHTML

    }
}

export default Elements