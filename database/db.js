import mongoose from 'mongoose';


const connection = async (URL) =>{
    //Username:Aaryan   Password:Aaryan@123(Aaryan%40123) for mongodb database
   
    try{
       await mongoose.connect(URL,{useNewUrlParser:true});
       console.log("Database connected Successfully");
    }
    catch(error){
        console.log("Database Not connected ",error);
    }
}

export default connection;