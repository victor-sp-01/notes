const validateEmail =( input )=>{
    const expresiones   =   {
        email : /[a-zA-Z0-9_.1+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
        email2 : /[a-zA-Z0-9_@.]/,
        whiteSpace: /\s/
    }

    if(expresiones.whiteSpace.test( input.value )) return [ false, 'el correo no puede tener espacios' ]
    if(input.value.length <= 6) return [ false, 'correo minimo de 6 caracteres' ]

    for ( let index = 0; index < input.value.length; index++ ) if(!expresiones.email2.test(input.value[index])) return [ false, 'el correo no es valido' ]

    if(!expresiones.email.test( input.value )) return [ false, 'el correo no es valido' ]
    return [ true ]
}
const validatePassword =( input )=> { return [ input.value.length >= 6 , 'constraseña al menos de 6 caracteres' ] } 

export { validateEmail, validatePassword}