import { asyncHandler } from "../utils/async.handler.js";
import { User } from "../models/user.models.js";

const registerUser = asyncHandler(async(req,res)=>{
  const {email, username, password, role} = req.body;

  const existingUser = await User.findOne({email});
  if(existingUser){
    return res.status(400).json({message:"User already exists!"})
  }
  
  const user = await User.create({
    email,
    username,
    password,
    role,
  })
  console.log(user);

  return res.status(200).json({message:"User registered"}, user);


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

export {registerUser, logOutUser, verifyEmail, resendVerficationEmail, refreshAccessToken,forgotPassword, changeCurrentPassword, getCurrUser}