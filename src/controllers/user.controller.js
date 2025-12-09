import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user details from front end
  //validation - not empty
  //check if user already exists: check with both email and username
  //check for images, check for avatar
  //upoload them to cloudinary, avatar check
  //create user object - create entry in db
  //remove password and refresh token field from response
  //check for user creation
  //return response or error

  const {username, email, fullname, password} = req.body;
  console.log(email, password);


});

export { registerUser };
