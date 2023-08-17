import { Router, response } from 'express'
//import events from '../events.js'
import eventsRouter from './eventsRouter.js'

const indexRouter = Router()

// entra la peticion con /api desde index y ejecuta
indexRouter.get('/', (req, res, next) => {
  res.send('server en /api')
})

//llega peticion /api/events desde index y manda a eventsRouter
indexRouter.use('/events', eventsRouter)

//GET directo
/* indexRouter.get('/eventos' , (req, res, next) => {
  res.json({
    response: events,
    success: true,
    error: null,
  })
  console.log('get eventos desde index router');
})

 */
export default indexRouter