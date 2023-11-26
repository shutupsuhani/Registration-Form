const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{ type:String,required:true,min:3,max:20},
    
    email:{type:String,required:true,max:50,unique:true},

    Branch:{type:String,max:20,required:true},

    studentNo:{type:String,max:20,min:6,required:true},

    
  },
    
    
     {timestamps:true}

)

module.exports=mongoose.model("User",UserSchema);