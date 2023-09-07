import mongoose, { Model, Schema, model } from 'mongoose'

const placeSchema = Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  description: { type: String, required: false },
  alt: { type: String, required: false },
  category: { type: Schema.Types.ObjectId, ref: 'category', required: true } //ref para usar populate desde el controlelr
}, { timestamps: true }) //segundo parametro opcional

const PlaceModel = model('places', placeSchema)

export default PlaceModel
