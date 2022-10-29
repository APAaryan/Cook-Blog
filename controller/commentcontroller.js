import Comment from "../model/comment.js"



export const newComment = async (request,response) =>{
    try{
        const comment = await new Comment(request.body);
        comment.save();

        response.status(200).json({msg:"Comment saved"});
    }
    catch(error){
        response.status(500).json({error:error.message});
    }
}

export const getComments = async (request,response) =>{
    try{
        const Comments = await Comment.find({postid:request.params.id});


        response.status(200).json(Comments);
    }
    catch(error){
        response.status(500).json({error:error.message});
    }
}

export const deleteComment =async (request,response) =>{
    try{
        const comment = await Comment.findById(request.params.id);
        await comment.delete();

        response.status(200).json({msg:'comment deleted'});
    }
    catch(error){
        response.status(500).json({error:error.message});
    }
}

