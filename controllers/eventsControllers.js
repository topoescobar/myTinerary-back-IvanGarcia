import events from '../events.js'
import CategoryModel from '../models/Category.js'
import PlaceModel from '../models/Events.js'

const eventsController = {

  getAll: async (req, res, next) => {
    let success

    try {
      let allPlaces = await PlaceModel.find().populate({
        path: 'category',
        select: 'categoryName description'
      }) //trae el documento de la coleccion category
      res.json({
        res: allPlaces,
        success: true
      })
    } catch (err) {
      success = false
      next(err)
    }
  },

  getOne: async (req, res, next) => {
    let success
    const { id } = req.params

    try {
      let event = await PlaceModel.findById(id)

      res.json({
        res: event,
        success: true
      })

    } catch (err) {
      success = false
      next(err)
    }

  },

  //con la param de indexRouter buscamos el evento con ese param (precioEntrada)
  getByPrice: (req, res, next) => {
    const evento = events.find(ev => ev.precioEntrada <= req.params.precio)
    res.json({
      response: evento,
      success: true,
      error: null
    })
  },

  create: async (req, res, next) => {
    let success
    try {
      const category = await CategoryModel.findOne({ categoryName: req.body.category })
      const query = { ...req.body }
      console.log('query', query)
      query.category = category._id
      const newPlace = await PlaceModel.create(query)
      console.log('newPlace', newPlace)
      res.json({
        response: newPlace,
        success: true
      })
    } catch (err) {
      success = false
      next(err)
    }
  },

  update: async (req, res, next) => {
    const { id } = req.params
    let success

    try {
      let updatedPlace = await PlaceModel.findByIdAndUpdate(id, req.body, { new: true }) //new true devuelve la version actualizada
      res.json({
        response: updatedPlace,
        success: true
      })
    } catch (err) {
      success = false
      next(err) //va a entrar en el errorHandler de la peticion /api en index.js
    }

  },

  delete: async (req, res, next) => {
    const { id } = req.params
    let success

    try {
      let deletedPlace = await PlaceModel.findByIdAndRemove(id)
      res.json({
        response: "deleted: ",
        deletedPlace,
        success: true
      })
    } catch (err) {
      success = false
      next(err) //va a entrar en el errorHandler de la peticion /api en index.js
    }

  }

}

export default eventsController