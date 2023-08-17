import mongoose, { Model, Schema, model } from 'mongoose'

const eventSchema = Schema ({
  title: {type:String, required:true}, 
  imgUrl: {type:String, required:true},
  description: {type:String, required:false}, 
  alt: {type:String, required:false}, 
}, { timestamps: true}) //segundo parametro opcional

const EventModel = model('event', eventSchema)

export default EventModel
  