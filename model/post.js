import mongoose from 'mongoose';

const postschema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:false
    },
    name:{
        type:String,
        required:true
    },
    createDate:{
        type:Date
    }
});

const post = mongoose.model('post',postschema);

export default post;