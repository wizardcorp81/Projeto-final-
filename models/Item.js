
export default class Item
{
    static proximoID = 1
    static all = []

    static findById( id )
    {
        const itemEncontrado = Item.all.find( itm => itm.id === id )
        
        if ( itemEncontrado !== undefined ) {
            return itemEncontrado
        } else {
            return null
        }
    }

    constructor( produto, marca, categoria, valor, cor, voltagem, tamanho )
    {
        this.produto = produto;
        this.marca = marca;
        this.categoria = categoria;
        this.valor = valor;
        this.cor = cor;
        this.voltagem = voltagem;
        this.tamanho = tamanho;
        this.id = Item.proximoID++
    }

    dadosPublicos()
    {
        return {
            "id": this.id,
            "produto": this.produto,
            "marca": this.marca,
            "categoria": this.categoria,
            "valor": this.valor,
            "cor": this.cor,
            "voltagem": this.voltagem,
            "tamanho": this.tamanho
        }
    }

    save()
    {
        const item = Item.findById( this.id )

        if ( item === null ) {
            Item.all.push( this )
        }
    }

    update( novosDados )
    {

        for ( let campo in novosDados )
        {
            if ( typeof this[campo] !== 'function' )
                this[campo] = novosDados[campo]
        }
    }

    delete()
    {
        const posicao = Item.all.findIndex( itm => itm.id === this.id )
        if ( posicao >= 0 )
            Item.all.splice( posicao, 1 )
    }
}
