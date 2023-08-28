import { Router } from 'express'
import categoryController from '../controllers/categoryController.js'

const categoryRouter = Router()

categoryRouter.get('/', categoryController.getAll)
categoryRouter.get('/:id', categoryController.getOne)
categoryRouter.post('/', categoryController.create)
categoryRouter.put('/:id', categoryController.update)
categoryRouter.delete('/:id', categoryController.delete)

export default categoryRouter