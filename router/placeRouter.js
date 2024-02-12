import { Router } from 'express'
import placesController, { searchPlace } from '../controllers/placesControllers.js'

const placesRouter = Router()

//peticion /api/events desde indexRouter -> GET a traves de controllers
//cada param debe tener una ruta distinta o solo tomara el primero
placesRouter.get('/', placesController.getAll)
placesRouter.get('/search', searchPlace)
placesRouter.get('/:id', placesController.getOne)
placesRouter.get('/price/:precio', placesController.getByPrice)
placesRouter.post('/', placesController.create)
placesRouter.put('/:id', placesController.update)
placesRouter.delete('/:id', placesController.delete)

export default placesRouter