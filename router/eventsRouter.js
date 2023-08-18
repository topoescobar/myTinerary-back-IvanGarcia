import { Router } from 'express'
import eventsController from '../controllers/eventsControllers.js'

const eventsRouter = Router()

//peticion /api/events desde indexRouter -> GET a traves de controllers
//cada param debe tener una ruta distinta o solo tomara el primero
eventsRouter.get('/', eventsController.getAllEvents)
eventsRouter.get('/:id', eventsController.getOneEvent)
eventsRouter.get('/names/:nombre', eventsController.getByName)
eventsRouter.get('/price/:precio', eventsController.getByPrice)

eventsRouter.post('/', eventsController.createEvent )


export default eventsRouter