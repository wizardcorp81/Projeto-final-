const tabelas = {
    eletrodomesticos: [
        { id: 1, produto: 'Geladeira', marca: 'Electrolux', valor: 2300, cor: 'Branca', voltagem: '110', tamanho: 'Duplex' },
        { id: 2, produto: 'Geladeira', marca: 'Brastemp', valor: 7418, cor: 'Inox', voltagem: '220', tamanho: '1 Porta' },
        { id: 3, produto: 'Geladeira', marca: 'Consul', valor: 5921, cor: 'Branca', voltagem: '110', tamanho: 'Duplex' },
        { id: 4, produto: 'Geladeira', marca: 'Panasonic', valor: 5678, cor: 'Inox', voltagem: '220', tamanho: '1 Porta' },
        { id: 5, produto: 'Geladeira', marca: 'Samsung', valor: 7386, cor: 'Branca', voltagem: '110', tamanho: 'Duplex' },
        { id: 6, produto: 'Geladeira', marca: 'Philco', valor: 5466, cor: 'Inox', voltagem: '220', tamanho: '1 Porta' },
        { id: 7, produto: 'Geladeira', marca: 'Midea', valor: 7688, cor: 'Branca', voltagem: '110', tamanho: 'Duplex' }
    ],
    eletronicos: [
        { id: 8, produto: 'Smart tv', marca: 'Samsung', valor: 3773, cor: 'Preta', voltagem: 'Bivolt', tamanho: '32' },
        { id: 9, produto: 'Smart tv', marca: 'LG', valor: 4947, cor: 'Preta', voltagem: 'Bivolt', tamanho: '43' },
        { id: 10, produto: 'Smart tv', marca: 'Philco', valor: 2769, cor: 'Preta', voltagem: 'Bivolt', tamanho: '32' },
        { id: 11, produto: 'Smart tv', marca: 'TCL', valor: 3100, cor: 'Preta', voltagem: 'Bivolt', tamanho: '43' },
        { id: 12, produto: 'Smart tv', marca: 'Multilaser', valor: 4582, cor: 'Preta', voltagem: 'Bivolt', tamanho: '32' },
        { id: 13, produto: 'Smart tv', marca: 'Philips', valor: 2699, cor: 'Preta', voltagem: 'Bivolt', tamanho: '43' },
        { id: 14, produto: 'Smart tv', marca: 'AOC', valor: 4729, cor: 'Preta', voltagem: 'Bivolt', tamanho: '32' }
    ],
    vestuario: [
        { id: 15, produto: 'Camisa', marca: 'adidas', valor: 65, cor: 'Azul', voltagem: 'NA', tamanho: 'P' },
        { id: 16, produto: 'Camisa', marca: 'Nike', valor: 277, cor: 'Verde', voltagem: 'NA', tamanho: 'M' },
        { id: 17, produto: 'Camisa', marca: 'Hering', valor: 150, cor: 'Vermelho', voltagem: 'NA', tamanho: 'G' },
        { id: 18, produto: 'Camisa', marca: 'PUMA', valor: 206, cor: 'Amarelo', voltagem: 'NA', tamanho: 'GG' },
        { id: 19, produto: 'Camisa', marca: 'Reserva', valor: 282, cor: 'Rosa', voltagem: 'NA', tamanho: 'XG' },
        { id: 20, produto: 'Camisa', marca: 'Domyos', valor: 177, cor: 'Preta', voltagem: 'NA', tamanho: 'P' },
        { id: 21, produto: 'Camisa', marca: 'Marfinno', valor: 335, cor: 'Branca', voltagem: 'NA', tamanho: 'M' }       
    ]
}

/**
 * Busca o array de produtos de uma determinada tabela
 * @param {string} tabela 
 * @returns {{ id: number; produto: string; marca: string; valor: number; cor: string, voltagem: string, tamanho: string}[]}
 */
export function busca( tabela ) {
    if ( tabela in tabelas ) {
        return tabelas[tabela]
    } else {
        throw new Error(`A tabela ${tabela} não existe! As tabelas existentes são: ${Object.keys(tabelas)}`)
    }
}

function ultimoid( tabela ) {
    const produtos = busca( tabela )
    return produtos[ produtos.length - 1 ].id
}

/**
 * Insere um item em uma tabela especificada e devolve o novo elemento criado 
 * @param {string} tabela 
 * @param {any} item 
 * @returns {{ id: number; produto: string; marca: string; valor: number; cor: string, voltagem: string, tamanho: string}[]}
 */
export function insere( tabela, item ) {
    if ( !item['produto'] || !item['valor'] ) {
        throw new Error(
            'Você precisa informar os campos "produto" e "valor" e eles precisam ter dados! ' +
            'Os valores informados foram: ' + Object.keys(item) +
            ' e seus valores são: ' + Object.values(item)
        )
    }
    const produto = {
        id: ultimoid( tabela ) + 1,
        produto: item.produto,
        valor: item.valor
    }    
    busca( tabela ).push( produto )
    return produto
}
