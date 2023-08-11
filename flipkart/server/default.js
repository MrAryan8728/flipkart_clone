import { products} from '../server/constants/data.js';
import Product from './modal/productSchema.js';

const defaultData = async() =>{
    try{
        await Product.insertMany(products);
        console.log("Data saved Successfully");
    }catch(err){
        console.log("Error Occured in Insertion",err.message);
    }
}

export default defaultData;