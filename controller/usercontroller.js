import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../model/user.js';
import token from '../model/token.js';

dotenv.config();

export const signupUser = async (request,response) =>{
  try{
    //generating random no before actual password(hash)
    // const salt =await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    const user = {name:request.body.name, email:request.body.email, password:hashedPassword};

    const newuser= new User(user);
    await newuser.save();
    return response.status(200).json({msg: 'Signup is Sucessfull'});
  }
  catch(error){
    return response.status(500).json({msg: 'Error while Signup'});
  }
}
export const loginUser = async (request,response) =>{
  let user = await User.findOne({email:request.body.email});
  if(!user){
    return response.status(400).json({msg: 'Email does not match'});
  }

  try{
    let match = await bcrypt.compare(request.body.password,user.password);
    if(match){
      const accesstoken=jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY,{expiresIn: '10m'});
      const refreshtoken=jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

      const newtoken = new token({token: refreshtoken});
      await newtoken.save();

      return response.status(200).json({accessToken: accesstoken ,refreshToken: refreshtoken, name: user.name, email: user.email });
    }
    else{
      return response.status(400).json({msg: 'Password does not match'});
    }
  }
  catch(error){
    return response.status(500).json({msg: 'Error while Login'});
  }
}