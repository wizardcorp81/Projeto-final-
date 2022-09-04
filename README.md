# BEM VINDO À MICROMARKET

Esta é a documentação para utilização da API para cadastro, alterção e deleção de produtos da vitrine virtual da micromarket.
Para utilização da API será necessário instalar as seguintes bibliotecas:
 * express
 * nodemon

Esta API possui os seguintes endpoints:

// C: Create - POST
'/produto'
  Neste endpoint deve ser acrescentado no corpo (body) em formato JSON os produtos com os seguintes campos:
  produto, marca, categoria, valor, cor, voltagem, tamanho
  
  Ex.:
  {
    "produto": "TV", 
    "marca": "AOC", 
    "categoria": "Eletronico", 
    "valor": 3000, 
    "cor": "Preta", 
    "voltagem": "Bivolt", 
    "tamanho": "ND" 
}
  
// R: Read - GET
'/produto'
 Neste endpoint será retornado a lista de todos os produtos da vitrine 
 
// R: Read específico - GET + id do recurso
'/produto/:id'
 Neste endpoint será retornado a lista dos produtos da vitrine de acordo com o ID
 
// U: Update específico - PUT + id do recurso
'/produto/:id'
  Neste endpoint deve ser alterado no corpo (body) em formato JSON os produtos com os seguintes campos:
  produto, marca, categoria, valor, cor, voltagem, tamanho
  
  Ex.:
  {
    "produto": "TV", 
    "marca": "AOC", 
    "categoria": "Eletronico", 
    "valor": 3000, 
    "cor": "Preta", 
    "voltagem": "Bivolt", 
    "tamanho": "ND" 
}

// D: Delete específico - DELETE + id do recurso
'/produto/:id'
 Neste endpoint será deletado a lista dos produtos da vitrine de acordo com o ID
