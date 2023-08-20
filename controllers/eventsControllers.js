import events from '../events.js'
import PlaceModel from '../models/Events.js'

const eventsController = {

  getAllEvents: async (req, res, next) => {
    let allEvents, error, success

    try {
      allEvents = await PlaceModel.find()
      success = true
    } catch (err) {
      error = err
      success = false
    }

    res.json({
      res: allEvents,
      success,
      error
    })
    console.log('desde controller by eventsRouter')
  },

  getOneEvent: async (req, res, next) => {
    console.log(req.params);
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
    const evento = events.find(ev => ev.nombre == req.params.nombre)
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

  createEvent: async (req, res, next) => {
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

  }
}

export default eventsController