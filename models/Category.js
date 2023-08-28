import { Schema, model } from 'mongoose'

const categorySchema = Schema({
  categoryName: { type: String, unique: true },
  description: { type: String }
}, { timestamps: true });

const CategoryModel = model('category', categorySchema)

export default CategoryModel