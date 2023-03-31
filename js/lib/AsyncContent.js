class AsyncContent {
    constructor( options ){
        this.element    = options.element   || document.querySelector( options.classID ) || false
        this.data       = options.data      || []
        this.dataAsync  = options.dataAsync || []
        this.template   = options.template
    }

    render(){
        if( this.element ){ 

            setTimeout( async()=>{  

                const dataAsync = await this.dataAsync()

                if( JSON.stringify( this.data  ) !==  JSON.stringify( dataAsync ) )
                    this.element.innerHTML = this.template( dataAsync )

            })

            if( this.data.length !== 0 )
                this.element.innerHTML = this.template( this.data ) 
            
        }
    } 
    
}

export default AsyncContent 