import express from 'express'
import fs from 'fs'
import VitrineController from './controllers/VitrineController.js'

const app = express()

// Configurações da middleware
const middlewareJSON = express.json()
app.use( middlewareJSON )

app.get( '/docs', function ( pedido, resposta )
{
    const html = fs.readFileSync('./docs.html')
    resposta.status(200).send( html.toString() )
})

// C: Create - POST
app.post( '/produto', VitrineController.create )
// R: Read - GET
app.get( '/produto', VitrineController.index )
// R: Read específico - GET + id do recurso
app.get( '/produto/:id', VitrineController.show )
// U: Update específico - PUT + id do recurso
app.put( '/produto/:id', VitrineController.update )
// D: Delete específico - DELETE + id do recurso
app.delete( '/produto/:id', VitrineController.destroy )

const porta = 3300

app.listen( porta, function() {
    console.log( `
    A aplicação está rodando na porta ${porta}!
    Consulte a documentação no caminho /docs!
    ` )
})