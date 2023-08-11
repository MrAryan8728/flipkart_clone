import axios from 'axios';

const URL = 'http://localhost:4000'

export const authenticateSignUp = async(data) =>{
    try{
        return await axios.post(`${URL}/signUp`,data)
    }catch(err){
        console.log("Error Occured in API",err.message);
    }
}