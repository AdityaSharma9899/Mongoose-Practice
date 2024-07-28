import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"users"
  },
  subTodo:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'subtodos'
    }
  ]
  // Array of subTodos
},{timestamps:true})

export const Todo = mongoose.model("todos",todoSchema)