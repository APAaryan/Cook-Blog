import { useState ,useEffect} from "react";
import {API} from '../../../services/api';
import {Grid,Box} from '@mui/material';
import  SinglePost from './Post.jsx';
import { Link } from "react-router-dom";




const Posts = () =>{

    const [Post,setPost] =useState([]);

    useEffect(() =>{
        const fetchdata = async () =>{
          let response = await API.getallPost();
          if(response.isSuccess){
            setPost(response.data);
          }
        }
        fetchdata();
    },[])
    return (
        <>
            {
                Post?.length ? Post.map(post =>(
                    // <div style={{display:"grid", gridTemplateColumns:"33% 33% 33%"}}>
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link to={`details/${post._id}`} style={{textDecoration:"none" , color:"inherit"}}>
                            <SinglePost post={post} />
                        </Link>
                    </Grid>
                    // </div>
                )) 
                : <Box style={{color:"#878787" ,margin:"1.875rem 5rem" ,fontSize:20}}>
                    No Data Available to display
                  </Box>
            }
        </>
    )
}

export default Posts;
