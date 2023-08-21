import events from '../events.js'
import PlaceModel from '../models/Events.js'

const eventsController = {

  getAll: async (req, res, next) => {
    let allEvents, error, success

    try {
      allEvents = await PlaceModel.find()
      success = true
      res.json({
        res: allEvents,
        success,
        error
      })

    } catch (err) {
      error = err
      success = false
    }


    console.log('desde controller by eventsRouter')
  },

  getOne: async (req, res, next) => {
    let error = null
    let success = true
    const { id } = req.params

    try {
      let event = await PlaceModel.findById(id)
      success = true

      res.json({
        res: event,
        success: true
      })

    } catch (err) {
      success = false
      error = err
    }

  },

  //con la param de indexRouter buscamos el evento con ese param (nombre)
  getByName: (req, res, next) => {
    console.log('req.params', req.params)
    const evento = events.find(ev => ev.nombre === req.params.nombre)
    res.json({
      response: evento,
      success: true,
      error: null
    })
    // next() //ejecuta la siguiente funcion 
  },

  getByPrice: (req, res, next) => {
    console.log('req.params', req.params)
    const evento = events.find(ev => ev.precioEntrada <= req.params.precio)
    res.json({
      response: evento,
      success: true,
      error: null
    })
  },

  create: async (req, res, next) => {
    console.log(req.body)
    let error, newEvent, success
    //let places = req.body
    try {
      newEvent = await PlaceModel.create(req.body)
      success = true
    } catch (err) {
      error = err
      success = false
    }

    res.json({
      response: newEvent,
      success, error
    })
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
      console.log(err)
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
      console.log(err)
      success = false
      next(err) //va a entrar en el errorHandler de la peticion /api en index.js
    }

  }

}

export default eventsController