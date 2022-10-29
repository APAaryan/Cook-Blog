
import Post from '../model/post.js';

export const createPost = async (request,response)=>{
    try{
        const post = await new Post(request.body);
        post.save();

        return response.status(200).json({msg:'Post saved Successfully'});
    }
    catch(error){
        return response.status(500).json(error);
    }
}

export const getAllPosts = async (request,response) =>{
    try{
        let Posts = await Post.find({});
        return response.status(200).json(Posts);
    }
    catch(error){
        return response.status(500).json({msg:error.message});
    }
}

export const getpost = async(request,response) =>{
    try{
        const post = await Post.findById(request.params.id);

        return response.status(200).json(post);
    }
    catch(error){
        return response.status(500).json({msg:error.message});
    }
}

export const updatePost =async(request,response) =>{
    try{
        const post =await Post.findById(request.params.id);
        if(!post){
            return response.status(404).json({msg:'post not found'});
        }

        await Post.findByIdAndUpdate(request.params.id,{ $set: request.body} );
        return response.status(200).json({msg:'Post updated'});
    }
    catch(error){
        return response.status(500).json({msg:error.message});
    }
}

export const deletePost =async(request,response) =>{
    try{
        const post =await Post.findById(request.params.id);
        if(!post){
            return response.status(404).json({msg:'post not found'});
        }

        await post.delete();
        return response.status(200).json({msg:'Post deleted'});
    }
    catch(error){
        return response.status(500).json({msg:error.message});
    }
}