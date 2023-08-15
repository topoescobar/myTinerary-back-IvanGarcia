import mongoose, { Schema } from 'mongoose'

const eventSchema = Schema ({
  title: {type:String, required:true}, 
  imgUrl: {type:String, required:true},
  description: String, 
  alt: String, 
})