const CreateElement =( ...data )=>{
    const [ type = 'div', atributes = {}, html = '' ] = data

    const element = document.createElement( type )
    for (const atribute in atributes) element.setAttribute( atribute, atributes[ atribute ] )
    if( html !== '' ) element.innerHTML = html   
 
    return element 
}

export default CreateElement