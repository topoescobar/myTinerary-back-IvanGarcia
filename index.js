import express from 'express'
import indexRouter from './router/indexRouter.js'
import eventsRouter from './router/eventsRouter.js'

const server = express()

//manda peticiones /api/... a traves de indexRouter
server.use('/api', indexRouter)

server.get('/', (req, res, next) => {
  res.send('server en /')
})

server.listen(3000, () => { console.log('Servidor corriendo en puerto 3000') })
