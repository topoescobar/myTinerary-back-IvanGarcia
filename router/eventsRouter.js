import { Router } from 'express'
import eventsController from '../controllers/eventsControllers.js'

const eventsRouter = Router()

//peticion /api/events desde indexRouter -> GET a traves de controllers
//cada param debe tener una ruta distinta o solo tomara el primero
eventsRouter.get('/', eventsController.getAll)
eventsRouter.get('/:id', eventsController.getOne)
eventsRouter.get('/names/:nombre', eventsController.getByName)
eventsRouter.get('/price/:precio', eventsController.getByPrice)

eventsRouter.post('/', eventsController.create)
eventsRouter.put('/:id', eventsController.update)
eventsRouter.delete('/:id', eventsController.delete)


export default eventsRouter