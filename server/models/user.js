import mongoose from "mongoose";


 const userschema=new mongoose.Schema({
    _id:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,requied:true},
    resume:{type:String},
    image:{type:String,required:true},
})

const User=mongoose.model('User',userschema);

export default User;