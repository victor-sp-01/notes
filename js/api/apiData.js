const getData =async( _path )=>{
    const data = await fetch( _path )
    return data.status === 200 ? data.json() : []
}

const setData =async( _data, _path )=>{ 
    return await fetch(_path, { method : 'POST', body : _data, Headers : { "Content-Type" : "application/json" } })
                .then(respuesta => respuesta.json())
                .catch(error => console.log(error))
}

export { getData, setData }

 