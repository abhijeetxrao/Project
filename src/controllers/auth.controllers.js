import { asyncHandler } from "../utils/async.handler";
import { userRegistrationValidation } from "../validators/index.js";

const registerUser = asyncHandler(async(req,res)=>{
  const {email, username, password, role} = req.body;

  //Validation
  userRegistrationValidation(body);
})