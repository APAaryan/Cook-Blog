import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    name:{
        type:String,
        required1:true
    },
    postid:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        required:true
    },
    date :{
        type:Date
    }
})

const Comment = mongoose.model('Comment',commentSchema);

export default Comment;