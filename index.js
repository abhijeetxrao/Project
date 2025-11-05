import dotenv from 'dotenv'
import app from './app.js'
dotenv.config({path:"./.env"})
import { connection } from './src/db/index.js'
const port = process.env.PORT || 8000;



connection().then(()=>{
  app.listen(port, ()=>{
    console.log(`App is listening on ${port}`);
  })
})
.catch((err)=>{
  console.error(`MongoDB not connected! ${err}`)
})

