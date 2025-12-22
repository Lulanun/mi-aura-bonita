const ItemListContainer = ({subtitulo, texto})=> {
    // const {saludo}= props
    // console.log(props)
    //Aca van a ir todos los productos
    console.log('ItemListContainer')
    return(
        <div>
            <h1>{subtitulo}</h1>
            <h2>{texto}</h2>
        </div>
    )
}

export default ItemListContainer