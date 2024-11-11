import { produtos } from "../data"

export const retornaCardapio = () => {
    return produtos
}

export const buscaCategoria = (categoria) => {

    return (

        produtos.filter((prato) =>
            prato.categoria.toLocaleLowerCase().includes(categoria.toLocaleLowerCase())
        )
    )
}


export const filtraTextoBusca = (texto) => {
    return (
        produtos.filter((produto) =>
            produto.nome.toLocaleLowerCase().includes(texto.toLocaleLowerCase()) ||
            produto.categoria.toLocaleLowerCase().includes(texto.toLocaleLowerCase()) ||
            produto.descricao.toLocaleLowerCase().includes(texto.toLocaleLowerCase())
        )
    )
}