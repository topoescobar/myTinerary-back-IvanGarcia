import { Router } from 'express'
import eventsController, { searchPlace } from '../controllers/placesControllers.js'

const placesRouter = Router()

//peticion /api/events desde indexRouter -> GET a traves de controllers
//cada param debe tener una ruta distinta o solo tomara el primero
placesRouter.get('/search', searchPlace)
placesRouter.get('/', eventsController.getAll)
placesRouter.get('/:id', eventsController.getOne)
placesRouter.get('/price/:precio', eventsController.getByPrice)
placesRouter.post('/', eventsController.create)
placesRouter.put('/:id', eventsController.update)
placesRouter.delete('/:id', eventsController.delete)

export default placesRouter