import {body} from 'express-validator'

const userRegistrationValidation = ()=>{
  return [
    body('email')
      .trim()
      .notEmpty().withMessage("Email is Required!")
      .isEmail().withMessage("Email is Invalid!"),
    body("username")
      .trim()
      .notEmpty().withMessage("Username is Required!")
      .isLength({min:3}).withMessage('Username should be more than 3 characters!')
      .isLength({max:13}).withMessage('Username should be less than 13 characters!'),
    body("password")
      .trim()
      .isEmpty().withMessage('Password is Required!')
      .isLength({min:8}).withMessage("Password length should be more than or equal to 8!")
      .matches(/[A-Z]/).withMessage("Password should contain uppercase Alphabet")
      .matches(/[a-z]/).withMessage("Password should contain lowercase Alphabet")
      .matches(/[0-9]/).withMessage("Password should contain a number atleast!")
      .matches(/[@#$%^&*!]/).withMessage("Password should a symbol!"),
    
    body('role')
      .isEmpty().withMessage("Role is Required!")
  ]
}

const userLoginValidation = ()=>{[
  body('email')
    .isEmpty().withMessage("Email is Required!")
    .isEmail().withMessage("Email is Invalid!"),
  
    body('password')
      .isEmpty().withMessage('Password is Required!')]
}

export{userRegistrationValidation, userLoginValidation}