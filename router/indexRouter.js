import { Router, response } from 'express'
import eventsRouter from './eventsRouter.js'
import categoryRouter from './categoryRouter.js'

const indexRouter = Router()

// entra la peticion con /api desde index y ejecuta
indexRouter.get('/', (req, res, next) => {
  res.send('server en /api')
})

//llega peticion /api/events desde index y manda a eventsRouter
indexRouter.use('/events', eventsRouter)
indexRouter.use('/categories', categoryRouter)

export default indexRouter