import mongoose from "mongoose";

export const Connection = async(username,password) =>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.jze6xt8.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL);
        console.log("Connection established !!")
    }catch(err){
        console.log("Error while Connecting !!",err.message);
    }
}

export default Connection