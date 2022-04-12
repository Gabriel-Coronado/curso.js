
function ListRend({itens}){  
    return(
        <>
        <h3>Lista</h3>
        {itens.length > 0 ? (
            itens.map((item) => <p>{item}</p>)
        ) : (
                <p>Lista não cadastrada.</p>
            )} 
        </>
    )
}
export default ListRend