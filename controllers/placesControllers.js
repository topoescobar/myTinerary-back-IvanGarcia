import CategoryModel from '../models/CategoryModel.js'
import PlaceModel from '../models/PlaceModel.js'

export const searchPlace = async (req, res) => {
  // obtener todos los eventos
  const query = {}
  if (req.query.name) {
    query.name = { $regex: req.query.name, $options: 'i' }
  }
  // if (req.query.category) {
  //   const aux = await CategoryModel.findOne({ categoryName: req.query.category })
  //   query.category = aux._id
  // }

  try {
    const places = await PlaceModel.find(query)
    res.status(200).json({ status: 200, success: true, response: places })
  } catch (error) {
    res.status(500).json({ message: error })
  }

}

const eventsController = {

  getAll: async (req, res, next) => {

    try {
      let allPlaces = await PlaceModel.find().populate({
        path: 'category',
        select: 'categoryName description'
      }) //trae el documento de la coleccion category
      res.json({
        res: allPlaces,
      })
    } catch (err) {
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
  getByPrice: async (req, res, next) => {
    const evento = await PlaceModel.find(ev => ev.precioEntrada <= req.params.precio)
    res.json({
      response: evento,
      success: true,
      error: null
    })
  },

  create: async (req, res, next) => {
    try {
      const placeQuery = { ...req.body } //copia con spred op para no modificar el objeto original
      console.log(placeQuery)
      const category = await CategoryModel.findOne({ categoryName: placeQuery.category }) //busca la categoria

      if (category) {
        placeQuery.category = category._id
      } else {
        //crea la categoria si no existe y la asigna a el id de la nueva categoria al place
        const newCategory = await CategoryModel.create({ categoryName: placeQuery.category })
        placeQuery.category = newCategory._id
      }

      const newPlace = await PlaceModel.create(placeQuery)
      //usa la id asignada en el condicional 
      await CategoryModel.findOneAndUpdate({ _id: newPlace.category }, { $push: { places: newPlace._id } })

      res.status(201).json({
        newPlace,
        category: req.body.category
      })

    } catch (err) {
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