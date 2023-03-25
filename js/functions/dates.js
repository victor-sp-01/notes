const correctDate =( date )=>{
    let getDate = date
    getDate.setMinutes(getDate.getMinutes() + getDate.getTimezoneOffset())
    return getDate
}

const dateUTCtoDateLocal =( date )=>{
    const getDate = new Date( +date )
    const setDate = correctDate( getDate ) 
    return setDate.toLocaleDateString()
}

const dateUTCtoDateCustom =( date )=>{
    const getCurrentDate = new Date()
    const getDate = new Date( +date );

    const setDate = correctDate( getDate )
    return setDate.toLocaleDateString("es-ES", getCurrentDate.getFullYear() === setDate.getFullYear() ? { month: 'long', day: 'numeric' } :  { year:"numeric", month: 'long', day: 'numeric' });
}

const dateUTCtoDateYear =( date )=>{
    const getDate = new Date( +date );

    const setDate = correctDate( getDate )
    return setDate.toLocaleDateString("es-ES", { year:"numeric" } );
}

const dateUTCtoDateMonth =( date )=>{
    const getDate = new Date( +date );

    const setDate = correctDate( getDate )
    return setDate.toLocaleDateString("es-ES", { month: 'long' } );
}

const dateUTCtoDateMonthCustom =( date )=>{
    const getCurrentDate = new Date()
    const getDate = new Date( +date );

    const setDate = correctDate( getDate )
    return setDate.toLocaleDateString("es-ES", getCurrentDate.getFullYear() === setDate.getFullYear() ? { month: 'long' } :  { year:"numeric", month: 'long' });
}

const dateUTCtoDateCustomMonthDay =( date )=>{
    const getDate = new Date( +date );

    const setDate = correctDate( getDate )
    return setDate.toLocaleDateString("es-ES", { month: 'long', day: 'numeric' }  );
}

const dateUTCtoDateLocalMonthDay =( date )=>{
    const getDate = new Date( +date );

    const setDate = correctDate( getDate )
    return setDate.toLocaleDateString("es-ES", { month: 'numeric', day: 'numeric' }  );
}

const dateUTCtoDateDay =( date )=>{
    const getDate = new Date( +date );
    const setDate = correctDate( getDate )
    return setDate.toLocaleDateString("es-ES", { day: 'numeric' } ); 
}

export { dateUTCtoDateLocal, dateUTCtoDateYear, dateUTCtoDateMonth, dateUTCtoDateDay, dateUTCtoDateCustom, dateUTCtoDateMonthCustom, dateUTCtoDateCustomMonthDay, dateUTCtoDateLocalMonthDay }

 