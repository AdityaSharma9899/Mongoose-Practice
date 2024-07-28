import { Timestamp } from "bson";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:[true , "password is required"]
  }


},{timestamps:true})

export const UserModel = mongoose.Model('users' , userSchema)