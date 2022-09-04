const container = document.getElementById("container");
async function apiFetch(){
    const response =await fetch("http://localhost:3300/produto")
    let data = await response.json()
    card(data.dados)
}

function card(data){
    const cards = data.map((producto)=>{
    const div = criaElemento("div")
    const produto = criaElemento("p")
    const categoria = criaElemento("p")
    const valor = criaElemento("p")
    
    div.append(produto,categoria,valor,)
 console.log(producto)
        produto.innerHTML = producto.produto
        categoria.innerHTML = producto.categoria
        valor.innerHTML = producto.valor
        container.append(div)
    })

    return cards
 }
function criaElemento(elemento){
    const tag = document.createElement(elemento)
    return tag
}
