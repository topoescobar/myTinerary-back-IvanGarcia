import events from '../events.js'
import EventModel from '../models/Events.js'

const eventsController = {

  getAllEvents: async (req, res, next) => {
    const allEvents = await EventModel.find()
    res.json({
      response: allEvents,
      success: true,
      error: null
    })
    console.log('desde controller by eventsRouter')
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

    let error, newEvent, success = null

    try {
      newEvent = await EventModel.create(req.body)
      success = true
    } catch (err) {
      console.log(error)
      success = false
      error = err
    }

    res.json({
      response: newEvent,
      success ,
      error
    })

  }
}

export default eventsController