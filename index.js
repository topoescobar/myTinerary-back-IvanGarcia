import 'dotenv/config.js'
import './config/database.js'
import express from 'express'
import indexRouter from './router/indexRouter.js'
import cors from 'cors'

const server = express()
const port = process.env.PORT

server.use(cors())
server.use(express.json())

//manda peticiones /api/... a traves de indexRouter con midleware propio
server.use('/api', (req, res, next) => {
  console.log('Petition from:', req.ip, req.url)
  console.log('At date', new Date().toLocaleString())
  next()
}, indexRouter)

server.get('/', (req, res, next) => {
  res.send('server en /')
})

server.listen(port, () => { console.log('Servidor corriendo en puerto: ' + port) })
