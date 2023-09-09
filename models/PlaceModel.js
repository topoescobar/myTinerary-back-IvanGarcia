import mongoose, { Model, Schema, model } from 'mongoose'

const placeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  description: { type: String, required: false },
  alt: { type: String, required: false },
  category: { type: mongoose.Types.ObjectId, ref: 'category', required: true } //ref para usar populate desde el controlelr
}, { timestamps: true }) //segundo parametro opcional

const PlaceModel = model('place', placeSchema)

export default PlaceModel
