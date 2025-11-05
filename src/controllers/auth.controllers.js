import { asyncHandler } from "../utils/async.handler";
import { User } from "../models/user.models.js";

const registerUser = asyncHandler(async(req,res)=>{
  const {email, username, password, role} = req.body;

  const user = User.findOne(email);
  if(user){
    res.status(400).message("User already exists!");
  }
  
  User.create({
    email,
    username,
    password,
    role,
  })

})

const logOutUser = asyncHandler(async(req,res)=>{
  const {email, username, password, role} = req.body;
})

const verifyEmail = asyncHandler(async(req,res)=>{
  const {email, username, password, role} = req.body;
})

const resendVerficationEmail = asyncHandler(async(req,res)=>{
  const {email, username, password, role} = req.body;
})

const refreshAccessToken = asyncHandler(async(req,res)=>{
  const {email, username, password, role} = req.body;
})

const forgotPassword = asyncHandler(async(req,res)=>{
  const {email, username, password, role} = req.body;
})

const changeCurrentPassword = asyncHandler(async(req,res)=>{
  const {email, username, password, role} = req.body;
})

const getCurrUser = asyncHandler(async(req,res)=>{
  const {email, username, password, role} = req.body;
})

export {registerUser}