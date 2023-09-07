import CategoryModel from '../models/CategoryModel.js'

const categoryController = {

  getAll: async (req, res, next) => {
    try {
      const allCategories = await CategoryModel.find()
      res.status(200).json({
        res: allCategories,
        success: true
      })
    } catch (error) {
      res.status(500).json({
        error,
        success: false
      })
      next(error)
    }
  },

  getOne: async (req, res, next) => {
    const { id } = req.params
    try {
      const category = await CategoryModel.findById(id)
      res.status(201).json({
        res: category,
        success: true
      })
    } catch (error) {
      res.status(500).json({
        error,
        success: false
      })
      next(error)
    }
  },

  create: async (req, res, next) => {
    try {
      const newCategory = await CategoryModel.create(req.body)
      res.status(201).json({
        category: newCategory,
        success: true
      })
    } catch (error) {
      res.status(500).json({
        error,
        success: false
      })
      next(error)
    }
  },

  update: async (req, res, next) => {
    const { id } = req.params
    try {
      const updatedCategory = await CategoryModel.findByIdAndUpdate(id, req.body, { new: true })
      res.status(200).json({
        response: updatedCategory,
        success: true
      })
    } catch (error) {
      res.status(500).json({
        error,
        success: false
      })
      next(error)
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params
    try {
      const deletedCategory = await CategoryModel.findByIdAndDelete(id)
      res.status(204).json({
        response: "deleted: ",
        deletedCategory,
        success: true
      })
    } catch (error) {
      res.status(500).json({
        error,
        success: false
      })
      next(error)
    }
  }


}


export default categoryController