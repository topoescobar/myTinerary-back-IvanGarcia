import mongoose from 'mongoose'

mongoose.connect(process.env['DATABASE_URL'])
  .then(() => {
    console.log('database connected')
  })
  .catch(() => {
    console.log('database conection error')
  })