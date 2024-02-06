import 'dotenv/config.js'
import './config/database.js'
import express from 'express'
import indexRouter from './router/indexRouter.js'
import errorHandler from './midlewares/errorHandler.js'
import notFoundHandler from './midlewares/notFoundHandler.js'
import cors from 'cors'

const server = express()
const port = process.env.PORT

server.use(cors())
server.use(express.json())

//manda peticiones /api/... a traves de indexRouter con midleware propio y manejo de errores
server.use('/api', (req, res, next) => {
  console.log('Petition from:', req.ip, req.url)
  console.log('At date', new Date().toLocaleString())
  next()
}, indexRouter, errorHandler)

server.get('/', (req, res, next) => {
  res.send('Server en /')
})

//server.use(notFoundHandler) //procesa el error luego de probar con las rutas anteriores y lo pasa al sig
server.use(errorHandler) //manejo global

server.listen(port, () => { console.log('Servidor corriendo en puerto: ' + port) })
