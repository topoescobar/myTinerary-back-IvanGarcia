import 'dotenv/config.js'
import './config/database.js'
import express from 'express'
import indexRouter from './router/indexRouter.js'
import cors from 'cors'

const server = express()
const port = process.env.PORT

//manda peticiones /api/... a traves de indexRouter
server.use('/api', indexRouter)

server.get('/', (req, res, next) => {
  res.send('server en /')
})

server.listen(port, () => { console.log('Servidor corriendo en puerto: '+port) })
