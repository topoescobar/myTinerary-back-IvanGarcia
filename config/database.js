import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://topoescobar:topoDB123@cluster0.yynhfcx.mongodb.net/')
  .then(() => {
    console.log('database connected')
  })
  .catch(() => {
    console.log('database conection error')
  })