import { validationResult } from "express-validator";

import {ApiError} from "../utils/api-error.js"

export const validate = (req,res,next)=>{
  const errors = validationResult(req)

  if(errors.isEmpty()){
    return next()
  }
  const extractedError = [];
  console.log(errors)

  errors.array().map((err)=>extractedError.push({[err.path]:err.msg}))

  return res.status(422).json({
    message: "Received data is not valid!",
    errors: extractedError
  })
  
}