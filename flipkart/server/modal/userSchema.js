import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
        min:5,
        required:true,
        max:20
    },
    lastname:{
        type:String,
        trim:true,
        min:5,
        required:true,
        max:20
    },
    username:{
        type:String,
        trim:true,
        required:true,
        index:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        lowercase:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true
    }
})

const User = mongoose.model('user',userSchema);

export default User;
