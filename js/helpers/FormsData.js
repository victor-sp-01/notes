import CreateElement from "./CreateElement.js"
const FormsData =( datas = {} )=>{
    const element = document.createElement( 'form' )

    for (const data in datas) 
        element.append( CreateElement( 'input', { name:data, value:datas[ data ] } ) ) 
     
    return element
}

export default FormsData