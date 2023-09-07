import mongoose, { Schema, model } from 'mongoose'

const categorySchema = Schema({
  categoryName: { type: String, unique: true },
  description: { type: String },
  places: [{ type: mongoose.Types.ObjectId, ref: 'places' }] //genera array de ids de los lugares relacionados con estas categorias
}, { timestamps: true });

const CategoryModel = model('category', categorySchema)

export default CategoryModel