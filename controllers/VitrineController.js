import Item from "../models/Item.js"

export default class VitrineController
{
    // POST
    static create( pedido, resposta )
    {
        const listaPropriedades = Object.keys( pedido.body )
    
        if (
            listaPropriedades.includes( 'produto' ) &&
            listaPropriedades.includes( 'marca' ) &&
            listaPropriedades.includes( 'categoria' ) &&
            listaPropriedades.includes( 'valor' ) &&
            listaPropriedades.includes( 'cor' ) &&
            listaPropriedades.includes( 'voltagem' ) &&
            listaPropriedades.includes( 'tamanho' ) 

        ) {
            const produto = pedido.body.produto
            const marca = pedido.body.marca
            const categoria = pedido.body.categoria
            const valor = pedido.body.valor
            const cor = pedido.body.cor
            const voltagem = pedido.body.voltagem
            const tamanho = pedido.body.tamanho

            const item = new Item( produto, marca, categoria, valor, cor, voltagem, tamanho)
            item.save()
            resposta.status(200).json({
                mensagem: 'Produto cadastrado com sucesso!',
                dados: item.dadosPublicos()
            })
        } else {
            resposta.status(400).json({
                erro: 'Todos os campos são obrigatórios!',
                informados: listaPropriedades
            })
        }
    }

    // GET geral
    static index( pedido, resposta )
    {
        resposta.status(200).json({
            mensagem: 'Tentamos retornar todos os produtos!',
            dados: Item.all.map( itm => itm.dadosPublicos() )
        })
    }

    // GET com rota
    static show( pedido, resposta )
    {
        const idItem = Number( pedido.params.id )

        const produto = Item.findById( idItem )

        if ( produto )
        {
            resposta.status(200).json({
                mensagem: `Tentamos retornar o produto de id ${idItem}!`,
                dados: produto.dadosPublicos()
            })
        }
        else
        {
            resposta.status(404).json({
                mensagem: `Usuário ${idItem} não encontrado!`,
            })
        }
    }

    // PUT com rota
    static update( pedido, resposta )
    {
        const idItem = Number( pedido.params.id )
        
        // Pega o produto
        const produto = Item.findById( idItem )

        if ( !produto )
        {
            return resposta.status(404).json({
                mensagem: `produto inexistente!`,
            })
        }

        // Pega todas as propriedades vindas dos body parameters
        const camposSolicitados = Object.keys( pedido.body )
        const camposDoProduto = Object.keys( produto )

        // Se existe algum campo que não esteja nos campos do produto
        const camposIncorretos = camposSolicitados.some( campo => !camposDoProduto.includes(campo) )

        // Se existe alguma propriedade no body parameter que NÃO exista no produto:
        if ( camposIncorretos )
        {
            return resposta.status(400).json({
                mensagem: `Pedido inválido!`,
            })
        }

        // Faz a alteração no produto
        produto.update( pedido.body )

        // Devolve um 200 OK
        resposta.status(200).json({
            mensagem: `Produto de id ${idItem} atualizado com sucesso!`,
        })
    }

    // DELETE com rota
    static destroy( pedido, resposta )
    {
        const idItem = Number( pedido.params.id )

        const produto = Item.findById( idItem )

        if ( !produto )
        {
            return resposta.status(404).json({
                mensagem: `Impossível deletar produto que não existe!`,
            })
        }

        produto.delete()

        resposta.status(200).json({
            mensagem: `Produto ${idItem} removido com sucesso!`,
        })  
    }
}
