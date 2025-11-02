import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'

const userSchema = new Schema({
  avatar:{
    type:{
      url:String,
      localPath:String
    },
    default:{
      url:"https://placehold.co/600x400",
      localpath:""
    }
  },
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
  },
  fullname:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
  isEmailVerified:{
    type:Boolean,
    default:false
  },
  forgotPasswordToken:{
    type:String,
  },
  forgotPasswordExpiry:{
    type:Date,
  },
  emailVerificationToken:{
    type:String,
  },
  emailVerificationExpiry:{
    type:Date,
  }
},{timestamps:true});

userSchema.pre("save", async function(next){
  if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password,10)
  }
  next();
})

userSchema.methods.isPasswordCorrect = async function(password){
  return bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async function(){
  jwt.sign({
    
    username:this.username,
    email: this.email
  },process.env.ACCESS_KEY_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}

userSchema.methods.generateRefreshToken = async function(){
  jwt.sign({
    username:this.username,
    email: this.email
  },process.env.REFRESH_KEY_SECRET,{expiresIn:process.env.REFRESH_TOKEN_EXPIRY})
}

userSchema.methods.generateTemporaryToken = async function(){
  const unhashedToken = crypto.randomBytes(32).toString("hex") 
  const hashedToken = crypto.createHash("sha256").update(unhashedToken).digest("hash")
  const tokenExpiry = Date.now()+20*60*1000
  return {hashedToken, unhashedToken, tokenExpiry}
}
export const User = mongoose.model("User",userSchema)