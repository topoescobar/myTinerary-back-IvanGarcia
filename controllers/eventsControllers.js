import events from '../events.js'

const eventsController = {

  getAllEvents: (req, res, next) => {
    res.json({
      response: events,
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

  getByDate: (req, res, next) => {
    console.log('req.params', req.params)
    const evento = events.find(ev => ev.fecha === req.params.fecha)
    res.json({
      response: evento,
      success: true,
      error: null
    })
  },

  getByPrice: (req, res, next) => {
    console.log('req.params', req.params)
    const evento = events.find(ev => ev.precioEntrada <= req.params.precio)
    res.json({
      response: evento,
      success: true,
      error: null
    })
  }
  
}

export default eventsController