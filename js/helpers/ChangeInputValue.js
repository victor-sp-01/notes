const ChangeInputValue =( element = '', datas = {} )=>{ 

    for( const data in datas )
        if( element[ data ] ) 
            element[ data ].value = datas[ data ]
 
}
export default ChangeInputValue